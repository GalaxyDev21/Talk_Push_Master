import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text, 
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import { PRI_GREEN, SEC_RED } from '../../assets/consts';
import Search from '../../assets/icons/search.png';
import Notification from '../../assets/icons/notification.png';
import Avatar from '../../assets/images/avatar_1.png';
import colors from '../../config/styles';

const styles = StyleSheet.create({
  ShadowEffect: {
    elevation: 5,
    backgroundColor: PRI_GREEN,
    height: 65,
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AImgStyle: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },
  BlankView: {
    width: 9,
    height: 9,
    borderRadius: 9,
    backgroundColor:SEC_RED,
    position:'absolute',
    right:0,
    top:0,
    left: 12,
  },
  NIconStyles: {
    width: 18,
    height: 18,
    marginTop: 3,
  },
  CmnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImgStyle: {
    width: 22,
    height: 22,
    alignSelf: 'center',
  },
  TalkPushText: {
    color: '#fff',
    fontSize: 17,
    marginLeft: 10,
    fontFamily: colors.fonts.raleway.regular,
  },
  HsView: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HSubView: {
    alignSelf: 'center',
  },
  NoShadowEffect: {
    backgroundColor: PRI_GREEN,
    height: 65,
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

class CustomHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { boxShadow } = this.props;
    return (
      <View style={boxShadow ? styles.ShadowEffect : styles.NoShadowEffect}>
        <View style={styles.HSubView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.props.gotoFilter}
          >
            <View style={styles.HsView}>
              <Image source={Search} style={styles.ImgStyle} />
              <Text style={styles.TalkPushText}>TalkPush</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.CmnStyle}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.props.gotoNotification}
          >
            <View style={{ width: 25 }}>
              <Image
                source={Notification}
                style={styles.NIconStyles}
              />
              <View style={styles.BlankView}/>
            </View>
          </TouchableOpacity>

           <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.props.gotoProfile}
          >
            <Image
              source={Avatar}
              style={styles.AImgStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default CustomHeader