import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { WorkoutProvider } from './context/WorkoutContext';

export default function App() {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </WorkoutProvider>
  );
}
