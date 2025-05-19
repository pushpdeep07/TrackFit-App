import React from 'react';
import { View, StyleSheet } from 'react-native';

export function ThemedView({ style, children }) {
  return <View style={[styles.view, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: '#fff' },
});
