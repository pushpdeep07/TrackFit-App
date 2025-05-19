import { useState } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

export function Collapsible({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setOpen(!open)}>
        <ThemedText type="subtitle">{open ? '▼' : '▶'} {title}</ThemedText>
      </Pressable>
      {open && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  content: {
    paddingLeft: 10,
    marginTop: 4,
  },
});
