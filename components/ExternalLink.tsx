import { Linking, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const openLink = () => {
    Linking.openURL(href).catch((error) => {
      console.error('Failed to open URL:', error);
    });
  };

  return (
    <Pressable onPress={openLink} style={styles.link}>
      <ThemedText type="link">{children}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 4,
  },
});
