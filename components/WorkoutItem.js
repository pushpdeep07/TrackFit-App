import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkoutItem({ workout }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{workout.type}</Text>
      <Text>{workout.duration} mins | {workout.calories} kcal</Text>
      <Text>{new Date(workout.date).toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { padding: 12, backgroundColor: '#f0f0f0', borderRadius: 8, marginVertical: 6 },
  title: { fontWeight: 'bold', fontSize: 16 },
});
