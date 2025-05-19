import React from 'react';
import { View, StyleSheet, ScrollView, useColorScheme } from 'react-native';

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: {
  children: React.ReactNode;
  headerImage: React.ReactNode;
  headerBackgroundColor: { light: string; dark: string };
}) {
  const theme = useColorScheme() ?? 'light';
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: headerBackgroundColor[theme] }]}>
        {headerImage}
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  contentContainer: {
    padding: 16,
  },
});
