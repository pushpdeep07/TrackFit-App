import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="default">
          👋 Welcome to <ThemedText type="defaultSemiBold">TrackFit</ThemedText> — your companion for staying
          consistent with your fitness goals!
        </ThemedText>
        <ThemedText type="default" style={styles.paragraph}>
          🏃‍♂️ Fitness is crucial for a healthy lifestyle. TrackFit helps you stay accountable by scheduling,
          tracking, and analyzing your workouts.
        </ThemedText>
        <ThemedText type="default" style={styles.paragraph}>
          ➕ To add a workout session, tap the <ThemedText type="defaultSemiBold">Add</ThemedText> tab below.
        </ThemedText>
        <ThemedText type="default" style={styles.paragraph}>
          📊 To view your <ThemedText type="defaultSemiBold">upcoming, completed,</ThemedText> or{' '}
          <ThemedText type="defaultSemiBold">missed</ThemedText> workouts, tap the{' '}
          <ThemedText type="defaultSemiBold">Stats</ThemedText> tab.
        </ThemedText>
        <ThemedText type="default" style={styles.paragraph}>
          ✅ Stay active, stay consistent — and let TrackFit be your guide!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  section: {
    gap: 12,
    marginVertical: 16,
  },
  paragraph: {
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
