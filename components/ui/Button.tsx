import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { ButtonProps } from '../../interfaces';

// Define variant styles
const variantStyles = {
  primary: {
    backgroundColor: 'bg-[#C67C4E]',
    textColor: 'text-[#FFF]',
  },
  secondary: {
    backgroundColor: 'bg-[#C67C4E]',
    textColor: 'text-[#FFF]',
  },
  danger: {
    backgroundColor: 'bg-red-500',
    textColor: 'text-white',
  },
  outline: {
    backgroundColor: 'bg-transparent',
    textColor: 'text-slate-900',
    border: 'border border-slate-800',
  },
};

interface ExtendedButtonProps extends ButtonProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ExtendedButtonProps> = ({
  onPress,
  title = 'Button',
  variant = 'primary',
  backgroundColor,
  textColor,
  paddingX = 'px-6',
  paddingY = 'py-3',
  rounded = 'rounded-md',
  textStyle = 'font-semibold text-base',
  containerStyle = 'mt-6 w-full',
  disabled = false,
  leftIcon,
  rightIcon,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  // Use variant styles if no custom backgroundColor or textColor is provided
  const appliedBackgroundColor = backgroundColor || variantStyles[variant].backgroundColor;
  const appliedTextColor = textColor || variantStyles[variant].textColor;
  const borderStyle = variant === 'outline' ? variantStyles.outline.border : '';

  return (
    <TouchableOpacity
      className={`${containerStyle} ${appliedBackgroundColor} ${paddingX} ${paddingY} ${rounded} ${borderStyle} flex-row items-center justify-center`}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled}
      activeOpacity={0.7}
      style={isPressed ? styles.pressed : styles.normal}
    >
      {leftIcon && <View className={`${appliedTextColor} ${textStyle} mr-2`}>{leftIcon}</View>}
      <Text className={`${appliedTextColor} ${textStyle} text-center`}>{title}</Text>
      {rightIcon && <View className={`${appliedTextColor} ${textStyle} ml-2`}>{rightIcon}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  normal: {
    transform: [{ scale: 1 }],
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
});

export default Button;