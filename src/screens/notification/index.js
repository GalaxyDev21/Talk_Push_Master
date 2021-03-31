import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Content, Icon } from 'native-base';
import colors from '../../config/styles';
import CustomHeader from '../../components/header';
import { PRI_BLACK, PRI_WHITE, PRI_GREEN, SEC_GRAY } from '../../assets/consts';
import CStatusBar from '../../components/CStatusBar';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
  LeftView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  CmnRow: {
    flexDirection: 'row',
  },
  RightView:{
    width: width_unit * 580,
    marginRight: width_unit * 5,
  },
  list_item: {
    height: height_unit * 150,
    flexDirection: 'row',
    paddingVertical: height_unit * 30,
    paddingHorizontal: width_unit * 30,
  },
  list_avatar: {
    height: height_unit * 90,
    width: height_unit * 90,
    backgroundColor: SEC_GRAY,
    borderRadius: height_unit * 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width_unit * 20
  },
  list_avatar_text: {
    color: PRI_GREEN,
    fontSize: height_unit * 32,
    height: height_unit * 90,
    width: height_unit * 90,
    borderRadius: height_unit * 45,
    textAlign: 'center',
    lineHeight: height_unit * 90,
    fontFamily: colors.fonts.raleway.black,
  },
  MailIcon: {
    color:PRI_WHITE,
    fontSize:height_unit * 60,
  },
  TimeText: {
    fontFamily: colors.fonts.roboto.regular,
    flexWrap: 'wrap',
    fontSize: width_unit * 22,
    width: width_unit * 500,
    color: PRI_BLACK ,
  },
  MsgText: {
    fontSize: width_unit * 26,
    color: PRI_BLACK,
  },
});

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          message: 'Lukas Bierfreund assigned you a new lead.',
          time: '1 hour ago',
          from:'LB'

        },
        {
          message: "It's been 5 days since Max Armbruster replied.",
          time: '2 hours ago',
          from:'mail'

        },
        {
          message: 'You missed a call from Jiji Sy.',
          time: '16 hours ago',
          from:'JS'
        },
      ],
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CStatusBar />
        <CustomHeader
          boxShadow={false}
          gotoFilter={() => this.props.navigation.navigate('Filter')}
          gotoNotification={() => this.props.navigation.navigate('Notification')}
          gotoProfile={() => this.props.navigation.navigate('Profile')}
        />
        <Content style={{ backgroundColor: '#fff', }}>
          <FlatList
            data={this.state.data}
            extraData={this.state}
            renderItem={({ item: rowData }) => {
              return (
                <View style={styles.list_item}>
                   <TouchableOpacity activeOpacity={0.8} style={styles.list_avatar}>
                   <View style={styles.LeftView}>
                      {rowData.from=='mail' ?
                        <Icon name='ios-mail-outline' style={styles.MailIcon} />
                        : <Text style={styles.list_avatar_text}>{rowData.from}</Text>
                      }
                    </View>
                  </TouchableOpacity>
                  <View style={styles.RightView}>
                    <View style={styles.CmnRow}>
                      <Text style={[styles.MsgText, { fontFamily: rowData.badge != 0 ? colors.fonts.roboto.bold : colors.fonts.roboto.regular }]}>
                        {rowData.message}
                      </Text>
                    </View>
                    <View style={styles.CmnRow}>
                      <Text style={styles.TimeText} numberOfLines={1}>{rowData.time}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={(index) => index.toString()}
          />
        </Content>
      </View>
    )
  }
}