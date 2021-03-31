import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const FORTAB = width < 1025 && width > 721;
const TABLANDSCAPE = width < 1025 && width > 768;
const TABPORTRAIT = width > 721 && width < 769;
module.exports = {
  FORTAB,
  TABLANDSCAPE,
  TABPORTRAIT,
};
