import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';

export default function TabBarBackground() {
  if (Platform.OS === 'ios') {
    return <BlurView intensity={70} style={{ flex: 1 }} />;
  }
  return null;
}
