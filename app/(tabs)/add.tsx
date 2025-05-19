import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useWorkoutContext } from '../../context/WorkoutContext';
import { useRouter } from 'expo-router';

export default function AddWorkoutScreen() {
  const { addWorkout } = useWorkoutContext();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleAdd = () => {
    if (!title || !date || !startTime || !endTime) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    addWorkout({
      id: Date.now(),
      title,
      date, // e.g., 2025-05-20
      startTime, // e.g., 17:00
      endTime, // e.g., 18:00
    });

    router.push('/');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Workout Title" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Date (YYYY-MM-DD)" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Start Time (HH:mm)" value={startTime} onChangeText={setStartTime} />
      <TextInput style={styles.input} placeholder="End Time (HH:mm)" value={endTime} onChangeText={setEndTime} />
      <Button title="Add Workout" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 12, padding: 8 },
});
