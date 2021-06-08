import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  title: {
    fontSize: 22,
    paddingTop: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 19,
    paddingTop: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  logoImage: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginTop: 30,
  },

  form: {
    paddingTop: 10,
  },
  footer: {
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 17,
  },
  footerLinkText: {
    fontSize: 16,
    paddingLeft: 5,
    color: colors.primary
  },
});
