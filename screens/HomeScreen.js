import React, { useContext } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import { WorkoutContext } from '../context/WorkoutContext';
import WorkoutItem from '../components/WorkoutItem';

{workouts.map((w, index) => (
  <WorkoutItem key={index} workout={w} />
))}


export default function HomeScreen({ navigation }) {
  const { workouts } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts.sort((a, b) => b.id - a.id)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <WorkoutItem workout={item} />}
      />
      <View style={styles.buttons}>
        <Button title="Add Workout" onPress={() => navigation.navigate('Add Workout')} />
        <Button title="View Stats" onPress={() => navigation.navigate('Stats')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }
});
