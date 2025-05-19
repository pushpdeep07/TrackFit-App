import React from 'react';
import {
  Pressable,
  PressableProps,
  View,
  GestureResponderEvent,
} from 'react-native';
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

export const HapticTab = React.forwardRef<View, BottomTabBarButtonProps>(
  ({ children, onPress, accessibilityState, ...rest }, ref) => {
    const handlePress = (e: GestureResponderEvent) => {
      // optional haptic feedback
      if (onPress) onPress(e);
    };

    return (
      <Pressable
        {...(rest as PressableProps)}
        onPress={handlePress}
        accessibilityState={accessibilityState}
        ref={ref}
      >
        {children}
      </Pressable>
    );
  }
);

HapticTab.displayName = 'HapticTab';
