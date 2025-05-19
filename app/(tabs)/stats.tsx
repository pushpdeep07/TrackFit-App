import React, { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextStyle,
} from 'react-native';
import { useWorkoutContext } from '../../context/WorkoutContext';

interface Workout {
  id: number | string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'upcoming' | 'completed' | 'missed';
}

export default function Stats() {
  const { workouts, markAsCompleted, checkForMissedWorkouts, deleteWorkout } = useWorkoutContext();

  useEffect(() => {
    checkForMissedWorkouts();
    const interval = setInterval(checkForMissedWorkouts, 60000);
    return () => clearInterval(interval);
  }, []);

  const upcomingWorkouts = workouts.filter((w: Workout) => w.status === 'upcoming');
  const completedWorkouts = workouts.filter((w: Workout) => w.status === 'completed');
  const missedWorkouts = workouts.filter((w: Workout) => w.status === 'missed');

  const renderWorkout = ({ item }: { item: Workout }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.date}</Text>
      <Text>
        {item.startTime} - {item.endTime}
      </Text>
      <Text style={statusStyle(item.status)}>{item.status.toUpperCase()}</Text>

      <View style={styles.buttonRow}>
        {item.status === 'upcoming' && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => markAsCompleted(item.id)}
          >
            <Text style={styles.buttonText}>Mark as Completed</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => deleteWorkout(item.id)}
        >
          <Text style={styles.buttonText}>🗑 Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Upcoming Workouts</Text>
      {upcomingWorkouts.length === 0 ? (
        <Text>No upcoming workouts</Text>
      ) : (
        <FlatList
          data={upcomingWorkouts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderWorkout}
        />
      )}

      <Text style={styles.sectionTitle}>Completed Workouts</Text>
      {completedWorkouts.length === 0 ? (
        <Text>No completed workouts</Text>
      ) : (
        <FlatList
          data={completedWorkouts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderWorkout}
        />
      )}

      <Text style={styles.sectionTitle}>Missed Workouts</Text>
      {missedWorkouts.length === 0 ? (
        <Text>No missed workouts</Text>
      ) : (
        <FlatList
          data={missedWorkouts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderWorkout}
        />
      )}
    </View>
  );
}

const statusStyle = (status: Workout['status']): TextStyle => ({
  color:
    status === 'completed'
      ? 'green'
      : status === 'missed'
      ? 'red'
      : 'orange',
  fontWeight: 'bold',
  marginTop: 4,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
