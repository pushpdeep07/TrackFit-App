import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkoutContext = createContext();

export const useWorkoutContext = () => useContext(WorkoutContext);

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const saved = await AsyncStorage.getItem('WORKOUTS');
      if (saved) setWorkouts(JSON.parse(saved));
    };
    load();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('WORKOUTS', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts((prev) => [...prev, { ...workout, status: 'upcoming' }]);
  };

  const markAsCompleted = (id) => {
    setWorkouts((prev) =>
      prev.map((w) => (w.id === id ? { ...w, status: 'completed' } : w))
    );
  };

  const deleteWorkout = (id) => {
  setWorkouts((prev) => prev.filter((w) => w.id !== id));
};


  const checkForMissedWorkouts = () => {
    const now = new Date();
    setWorkouts((prev) =>
      prev.map((w) => {
        const endTime = new Date(w.date + 'T' + w.endTime);
        if (w.status === 'upcoming' && now > endTime) {
          return { ...w, status: 'missed' };
        }
        return w;
      })
    );
  };

  return (
    <WorkoutContext.Provider
      value={{ workouts, addWorkout, markAsCompleted, checkForMissedWorkouts, deleteWorkout }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
