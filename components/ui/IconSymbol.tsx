import { TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function IconSymbol({
  name,
  size = 24,
  color = 'black',
  style,
}: {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  style?: TextStyle;
}) {
  return <Ionicons name={name} size={size} color={color} style={style} />;
}
