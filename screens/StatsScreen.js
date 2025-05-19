// StatsScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { WorkoutContext } from '../context/WorkoutContext';

const WorkoutItem = ({ item, onComplete }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text>{new Date(item.date).toDateString()} | {new Date(item.startTime).toLocaleTimeString()} - {new Date(item.endTime).toLocaleTimeString()}</Text>
    {onComplete && <Button title="Mark Completed" onPress={() => onComplete(item.id)} />}
  </View>
);

export default function StatsScreen() {
  const { workouts, markCompleted } = useContext(WorkoutContext);

  const now = new Date();
  const upcoming = workouts.filter(w => !w.completed && new Date(w.endTime) > now);
  const completed = workouts.filter(w => w.completed);
  const missed = workouts.filter(w => !w.completed && new Date(w.endTime) <= now);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Workouts</Text>
      <FlatList
        data={upcoming}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <WorkoutItem item={item} onComplete={markCompleted} />}
      />

      <Text style={styles.header}>Completed Workouts</Text>
      <FlatList
        data={completed}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <WorkoutItem item={item} />}
      />

      <Text style={styles.header}>Missed Workouts</Text>
      <FlatList
        data={missed}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <WorkoutItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
  item: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, marginVertical: 6 },
  title: { fontSize: 16, fontWeight: '600' },
});