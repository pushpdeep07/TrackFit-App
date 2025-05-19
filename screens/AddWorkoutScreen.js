// AddWorkoutScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { WorkoutContext } from '../context/WorkoutContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';

export default function AddWorkoutScreen() {
  const { addWorkout } = useContext(WorkoutContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const router = useRouter();

  const handleAdd = () => {
    if (!title) return;
    const workout = {
      title,
      date: date.toISOString(),
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
    };
    addWorkout(workout);
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Workout Title</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder="e.g. Pushups" />

      <Text style={styles.label}>Date</Text>
      <DateTimePicker value={date} mode="date" display="default" onChange={(e, d) => setDate(d || date)} />

      <Text style={styles.label}>Start Time</Text>
      <DateTimePicker value={startTime} mode="time" display="default" onChange={(e, d) => setStartTime(d || startTime)} />

      <Text style={styles.label}>End Time</Text>
      <DateTimePicker value={endTime} mode="time" display="default" onChange={(e, d) => setEndTime(d || endTime)} />

      <Button title="Add Workout" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { marginTop: 20, fontSize: 16, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginTop: 5, borderRadius: 5 },
});