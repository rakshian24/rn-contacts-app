import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
  value,
  onChangeText,
  style,
  label,
  icon,
  iconPosition,
  error,
  hideText,
  setHideText,
  ...props
}) => {
  const [focussed, setFocussed] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'right') {
        return 'row-reverse';
      } else if (iconPosition === 'left') {
        return 'row';
      }
    }
  };

  const getBorderColor = () => {
    if (focussed) {
      return colors.primary;
    }

    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.wrapper,
          {
            flexDirection: getFlexDirection(),
            borderColor: getBorderColor(),
            alignItems: icon ? 'center' : 'baseline',
          },
        ]}
      >
        <TouchableOpacity onPress={() => setHideText(!hideText)}>
          <View style={styles.icon}>{icon && icon}</View>
        </TouchableOpacity>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocussed(true)}
          onBlur={() => setFocussed(false)}
          secureTextEntry={hideText}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
