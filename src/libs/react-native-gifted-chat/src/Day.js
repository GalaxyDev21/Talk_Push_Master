/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes, Dimensions } from 'react-native';
import moment from 'moment';
import colors from '../../../config/styles';
import Color from './Color';

import { isSameDay, isSameUser, warnDeprecated } from './utils';
import { DATE_FORMAT } from './Constant';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: width_unit * 20,
  },
  text: {
    backgroundColor: Color.backgroundTransparent,
    color: Color.defaultColor,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: colors.fonts.roboto.regular,
    color: '#87c930',
    textAlign: 'center',
    fontSize: width_unit * 20,
  },
});

export default function Day(
  { dateFormat, currentMessage, previousMessage, containerStyle, wrapperStyle, textStyle },
  context,
) {
  if (!isSameDay(currentMessage, previousMessage)) {
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={wrapperStyle}>
          <Text style={[styles.text, textStyle]}>
            {moment(currentMessage.createdAt)
              .locale(context.getLocale())
              .format(dateFormat)
              .toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
  return null;
}

Day.contextTypes = {
  getLocale: PropTypes.func,
};

Day.defaultProps = {
  currentMessage: {
    // TODO: test if crash when createdAt === null
    createdAt: null,
  },
  previousMessage: {},
  containerStyle: {},
  wrapperStyle: {},
  textStyle: {},
  // TODO: remove in next major release
  isSameDay: warnDeprecated(isSameDay),
  isSameUser: warnDeprecated(isSameUser),
  dateFormat: DATE_FORMAT,
};

Day.propTypes = {
  currentMessage: PropTypes.object,
  previousMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  // TODO: remove in next major release
  isSameDay: PropTypes.func,
  isSameUser: PropTypes.func,
  dateFormat: PropTypes.string,
};
