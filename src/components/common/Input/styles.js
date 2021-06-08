import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    width: '100%',
  },

  label: {
    fontSize: 18,
  },
  error: {
    fontSize: 12,
    color: colors.danger,
    paddingTop: 4,
  },
});
