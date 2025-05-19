import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function ThemedText({ type, children, style = {} }) {
  const textStyle = [styles.text, type === 'title' && styles.title, type === 'link' && styles.link, style];
  return <Text style={textStyle}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: { color: '#000' },
  title: { fontSize: 24, fontWeight: 'bold' },
  link: { color: 'blue', textDecorationLine: 'underline' },
});
