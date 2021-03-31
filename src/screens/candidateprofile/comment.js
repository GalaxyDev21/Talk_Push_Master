import React, { Component } from 'react';
import {
    Dimensions,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import colors from '../../config/styles';
import { Icon } from 'native-base';
import { PRI_WHITE, PRI_GREEN } from '../../assets/consts';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  CmnView: {
    paddingHorizontal: width_unit * 36,
    marginTop: height_unit * 50,
  },
  CLabel: {
    fontFamily: colors.fonts.roboto.regular,
    color: PRI_GREEN,
    fontSize: width_unit * 24,
    marginBottom: height_unit * 30,
  },
  CommentMsg: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#a2a2a2',
    fontSize: height_unit * 28,
    lineHeight: height_unit * 44,
  },
  CmnName: {
    fontFamily: colors.fonts.raleway.italic,
    fontSize: width_unit * 28,
    color: '#a2a2a2',
  },
  CnameView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: height_unit * 25,
  },
  HeaderView: {
    backgroundColor: PRI_GREEN,
    height: height_unit * 120,
    width: width,
    paddingHorizontal: width_unit * 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BtnView: {
    opacity: 0.8,
    backgroundColor: '#eee',
    width: width,
    marginTop: height_unit * 70,
    height: height_unit * 120,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  BtnText: {
    fontFamily: colors.fonts.roboto.regular,
    paddingHorizontal: width_unit * 28,
    color: PRI_GREEN,
    fontSize: width_unit * 28,
  },
  BtnIcon: {
    color: PRI_GREEN,
    fontSize: width_unit * 40,
    marginRight: 15,
  },
  HeadSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex:1,
  },
  HeadLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HBackIcon: {
    color: PRI_WHITE,
  },
  HeadTitle: {
    fontFamily: colors.fonts.raleway.regular,
    color: PRI_WHITE,
    fontSize: width_unit * 34,
    paddingLeft: width_unit * 20,
  },
});

export default class comment extends Component {
  render() {
    return (
        <View style={styles.MainView}>
            <View style={styles.HeaderView}>
                <View style={styles.HeadSubView}>
                    <View style={styles.HeadLeftView}>
                        <Icon
                          name='ios-arrow-back'
                          style={styles.HBackIcon}
                          onPress={() => this.props.navigation.goBack()}
                        />
                        <Text style={styles.HeadTitle}>Max</Text>
                    </View>
                    <Icon
                      name='more-horizontal'
                      type='Feather'
                      style={styles.HBackIcon}
                      onPress={() => this.props.navigation.goBack()}
                    />
                </View>
            </View>

            <View style={styles.CmnView}>
              <Text style={styles.CLabel}>Comments:</Text>
              <Text style={styles.CommentMsg}>
                {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolare eu fugiat nulla pariatur'}
              </Text>
              <View style={styles.CnameView}>
                <Text style={styles.CmnName}>by </Text>
                <Text style={[styles.CmnName, { color: PRI_GREEN }]}>Jiji Sy </Text>
                <Text style={styles.CmnName}>at 01:23 pm March 21, 2018</Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate('comment')}
              style={styles.BtnView}
            >
              <Text style={styles.BtnText}>Add Comments</Text>
              <Icon name='ios-arrow-forward' style={styles.BtnIcon} />
            </TouchableOpacity>

        </View>
    );
  }
}