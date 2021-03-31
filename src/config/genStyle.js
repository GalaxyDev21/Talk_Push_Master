import { StyleSheet, Platform } from 'react-native';
import colors from './styles';
import { FORTAB } from './MQ';

const common = StyleSheet.create({
  shadow: Platform.select({
    ios: {
      shadowRadius: 3,
      shadowOffset: { height: 5, width: 5 },
      zIndex: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#f66407',
    },
    android: Platform.Version >= 21 ? {
      borderBottomWidth: 1,
      borderBottomColor: '#f66407',
      zIndex: 5,
    } : null,
  }),
  PT10: {
    paddingTop: 10,
  },
  MT5: {
    marginTop: 5,
  },
  MT10: {
    marginTop: 10,
  },
  MT20: {
    marginTop: 20,
  },
  MT25: {
    marginTop: 25,
  },
  ML10: {
    marginLeft: 10,
  },
  PT15: {
    paddingTop: 15,
  },
  PT20: {
    paddingTop: 20,
  },
  PT30: {
    paddingTop: 30,
  },
  HP15: {
    paddingTop: 15,
  },
  HP10: {
    paddingTop: 10,
  },
  white: {
    color: '#FFF',
  },
  textBig: {
    color: '#000',
    fontSize: FORTAB ? 26 : 22,
    backgroundColor: '#0000',
    fontFamily: colors.fonts.montserrat.regular,
  },
  textH1: {
    color: '#000',
    fontSize: FORTAB ? 24 : 20,
    backgroundColor: '#0000',
    fontFamily: colors.fonts.montserrat.regular,
  },
  textH2: {
    color: '#000',
    fontSize: FORTAB ? 22 : 18,
    backgroundColor: '#0000',
    fontFamily: colors.fonts.montserrat.regular,
  },
  textH3: {
    color: '#000',
    fontSize: FORTAB ? 20 : 16,
    backgroundColor: '#0000',
    fontFamily: colors.fonts.montserrat.regular,
  },
  textH4: {
    color: '#000',
    fontSize: FORTAB ? 18 : 14,
    backgroundColor: '#0000',
    fontFamily: colors.fonts.montserrat.regular,
  },
  headerTitle: {
    color: '#000',
    fontFamily: colors.fonts.montserrat.semiBold,
    fontSize: FORTAB ? 24 : 20,
    backgroundColor: '#0000',
  },
  textNormal: {
    color: '#000',
    fontFamily: colors.fonts.montserrat.regular,
    fontSize: FORTAB ? 18 : 12,
    backgroundColor: '#0000',
  },
  txtCenter: {
    textAlign: 'center',
  },
  textSmall: {
    color: '#000',
    fontFamily: colors.fonts.montserrat.regular,
    fontSize: FORTAB ? 14 : 10,
    backgroundColor: '#0000',
  },
  semiBold: {
    fontFamily: colors.fonts.montserrat.semiBold,
  },
  medium: {
    fontFamily: colors.fonts.montserrat.medium,
  },
  containerCommon: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  containerMainBg: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  justRowBet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBold: {
    fontFamily: colors.fonts.montserrat.bold,
  },
  text16: {
    fontSize: FORTAB ? 18 : 16,
  },
  brandColor: {
    color: colors.brandBtnColor,
  },
  StatusBar: {
    backgroundColor: colors.statusBarColor,
    height: colors.headerHeight,
  },
});

export default common;

