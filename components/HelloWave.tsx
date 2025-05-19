import Animated, { Easing, useSharedValue, withRepeat, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { useEffect } from 'react';
import { Text } from 'react-native';

export function HelloWave() {
  const rotate = useSharedValue(0);

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(1, { duration: 600, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotate.value * 30 - 15}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Text style={{ fontSize: 24 }}>👋</Text>
    </Animated.View>
  );
}
