import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import common from '../config/genStyle';
import colors from '../config/styles';

class CStatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (Platform.OS !== 'ios') {
      return null;
    }
    const { color } = this.props;
    return (
      <View style={[common.StatusBar, { backgroundColor: color }]} />
    );
  }
}

CStatusBar.propTypes = {
  color: PropTypes.string,
};
CStatusBar.defaultProps = {
  color: colors.statusBarColor,
};

export default CStatusBar;
