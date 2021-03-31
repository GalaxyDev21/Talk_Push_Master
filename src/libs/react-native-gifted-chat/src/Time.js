/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes, Dimensions } from 'react-native';

import moment from 'moment';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import Color from './Color';
import { TIME_FORMAT } from './Constant';
import colors from '../../../config/styles';

const { width } = Dimensions.get("window");
const width_unit = width / 750;

const timeStyles = StyleSheet.create({
  TimeMainView: {
    flexDirection: 'row',
    width: '70%',
  },
  FbIcon: {
    color: '#0008',
    opacity: 0.5,
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 5,
  },
  FbByText: {
    fontSize: width_unit * 20,
    color: '#a2a2a2',
    fontFamily: colors.fonts.roboto.regular,
  },
  OtherView: {
    width: '25%',
    alignItems: 'center',
    flexDirection: 'row',
    width: '30%',
  },
  CheckAllIcon: {
    color: '#87c930',
    fontSize: 15,
    marginRight: 5,
  },
});

export default function Time({ position, containerStyle, currentMessage, timeFormat }, context) {
  return (
    <View style={[styles[position].container, containerStyle[position]]}>
      <View style={timeStyles.TimeMainView}>
        <FIcon name="facebook" style={timeStyles.FbIcon} />
        { currentMessage.fbBy !== undefined && currentMessage.fbBy !== '' ?
          <Text style={timeStyles.FbByText}>
            {currentMessage.fbBy}
          </Text> : null
        }
      </View>
      <View style={timeStyles.OtherView}>
        <MIcon name="check-all" style={timeStyles.CheckAllIcon} />
        <Text style={[styles[position].text, textStyle[position]]}>
          {moment(currentMessage.createdAt)
            .locale(context.getLocale())
            .format( currentMessage.type !== undefined && currentMessage.type === 'notimsg' ? 'MMM DD, h:mm A' : timeFormat)}
        </Text>
      </View>
    </View>
  );
}

const containerStyle = {
  // marginLeft: 10,
  // marginRight: 10,
  marginBottom: 5,
  flexDirection: 'row',
  width: '100%',
};

const textStyle = {
  fontSize: width_unit * 20,
  backgroundColor: 'transparent',
  fontFamily: colors.fonts.roboto.regular,
  color: '#a2a2a2',
};

const styles = {
  left: StyleSheet.create({
    container: {
      ...containerStyle,
    },
    text: {
      color: Color.timeTextColor,
      ...textStyle,
    },
  }),
  right: StyleSheet.create({
    container: {
      ...containerStyle,
    },
    text: {
      color: Color.white,
      ...textStyle,
    },
  }),
};

Time.contextTypes = {
  getLocale: PropTypes.func,
};

Time.defaultProps = {
  position: 'left',
  currentMessage: {
    createdAt: null,
  },
  containerStyle: {},
  textStyle: {},
  timeFormat: TIME_FORMAT,
};

Time.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  currentMessage: PropTypes.object,
  containerStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style,
  }),
  textStyle: PropTypes.shape({
    left: Text.propTypes.style,
    right: Text.propTypes.style,
  }),
  timeFormat: PropTypes.string,
};
