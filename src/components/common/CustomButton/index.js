import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({ title, disabled, loading, variant, onPress }) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    return colors[variant];
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.customBtn, { backgroundColor: getBgColor() }]}
    >
      <View style={[styles.btnBody]}>
        {loading &&<ActivityIndicator
          color={variant === 'primary' ? colors.secondary : colors.primary}
        />}
        {title && (
          <Text
            style={[
              styles.customBtnText,
              {
                color: disabled ? 'black' : colors.white,
                paddingLeft: loading ? 5 : 0,
              },
            ]}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
