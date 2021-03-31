import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Keyboard,
} from 'react-native';
import { Icon } from 'native-base';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import { PRI_BLACK, PRI_WHITE, PRI_GREEN, SEC_RED, SEC_GRAY } from '../../assets/consts';
import LabelItem from '../../components/LabelItem';
import colors from '../../config/styles';
import CStatusBar from '../../components/CStatusBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  HeaderView: {
    backgroundColor: PRI_GREEN,
    height: height_unit * 136,
    width: width,
    paddingHorizontal: width_unit * 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeadSubView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeadBackIcon: {
    color: PRI_WHITE,
  },
  HeadTitle: {
    fontFamily: colors.fonts.raleway.regular,
    color: PRI_WHITE,
    fontSize: width_unit * 34,
    paddingLeft: width_unit * 30,
  },
  ProfileView: {
    width: '100%',
    height: height_unit * 444,
    backgroundColor: '#87c93026',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  ProfileText: {
    color: '#87c930',
    fontFamily: colors.fonts.raleway.bold,
    fontSize: width_unit * 38,
    color: '#fff',
    backgroundColor: PRI_GREEN,
    width: width_unit * 150,
    height: width_unit * 150,
    borderRadius: width_unit * 75,
    lineHeight: width_unit * 150,
    textAlign: 'center',
  },
  InputViewStyle: {
    width: width,
    backgroundColor: '#fff',
  },
  InputLabelStyle: {
    marginLeft: 5,
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 24,
    color: '#575756',
    opacity: 0.5,
  },
  InputTextStyle: {
    marginLeft: 5,
    fontFamily: colors.fonts.raleway.regular,
    color: '#575756',
    fontSize: width_unit * 28,
  },
  LabelItemStyle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#5757563f',
    backgroundColor: '#fff',
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  RightArrow: {
    marginRight: 18,
    color: PRI_GREEN,
    fontSize: height_unit * 28,
  },
  LItemLabel: {
    marginBottom: 5,
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 24,
    color: '#575756',
    opacity: 0.5,
  },
  LItemText: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#575756',
    fontSize: width_unit * 28,
  },
  ChangePasswordView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    height:height_unit*150 ,
    alignItems:'center',
    backgroundColor: '#f8f8f8',
    paddingHorizontal:width_unit * 36,
  },
  ChangePasswordText: {
    fontFamily: colors.fonts.raleway.regular,
    color:PRI_GREEN,
    fontSize:height_unit * 30,
  },
  CArrow: {
    color: PRI_GREEN,
    fontSize: height_unit * 28,
  },
  BtnView: {
    width: '100%',
    height: width_unit * 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#575756',
  },
  BtnText: {
    fontFamily: colors.fonts.raleway.regular,
    fontSize: height_unit * 30,
    color: '#fff',
  },
});

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fnm: '',
      lnm: '',
      eid: '',
      pno: '',
      jTitle: '',
      sid: '',
    }
  }

  render() {
    const { fnm, lnm, eid, pno, jTitle, sid } = this.state;
    return (
      <View style={styles.MainView}>
        <CStatusBar />
        <View style={styles.HeaderView}>
          <View style={styles.HeadSubView}>
            <Icon
              name='ios-arrow-back'
              style={styles.HeadBackIcon}
              onPress={() => this.props.navigation.goBack()}
            />
            <Text style={styles.HeadTitle}>User Profile</Text>
          </View>
        </View>
        
        <KeyboardAwareScrollView
          bounces={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.ProfileView}>
            <Text style={styles.ProfileText}>JS</Text>
          </View>

          <View style={styles.InputViewStyle}>
            <FloatingLabelInput
              ref={(o) => { this.FirstName = o; }}
              returnKeyType={'next'}
              label="First Name"
              value={fnm}
              type={false}
              icon={false}
              labelStyle={styles.InputLabelStyle}
              textStyle={styles.InputTextStyle}
              onChange={(text) => { this.setState({ fnm: text }); }}
              bottomWidth={StyleSheet.hairlineWidth}
              bottomColor={'#5757563f'}
              onSubmitEditing={() => {
                if (this.LastName) {
                  this.LastName.focus();
                }
              }}
            />
          </View>
          
          <View style={styles.InputViewStyle}>
            <FloatingLabelInput
              ref={(o) => { this.LastName = o; }}
              returnKeyType={'next'}
              label="Last Name"
              value={lnm}
              type={false}
              icon={false}
              labelStyle={styles.InputLabelStyle}
              textStyle={styles.InputTextStyle}
              onChange={(text) => { this.setState({ lnm: text }); }}
              bottomWidth={StyleSheet.hairlineWidth}
              bottomColor={'#5757563f'}
              onSubmitEditing={() => {
                if (this.EmailAddress) {
                  this.EmailAddress.focus();
                }
              }}
            />
          </View>

          <View style={styles.InputViewStyle}>
            <FloatingLabelInput
              ref={(o) => { this.EmailAddress = o; }}
              returnKeyType={'next'}
              label="Email Address"
              value={eid}
              type={false}
              icon={false}
              labelStyle={styles.InputLabelStyle}
              textStyle={styles.InputTextStyle}
              onChange={(text) => { this.setState({ eid: text }); }}
              bottomWidth={StyleSheet.hairlineWidth}
              bottomColor={'#5757563f'}
              onSubmitEditing={() => {
                if (this.MobileNo) {
                  this.MobileNo.focus();
                }
              }}
            />
          </View>

          <View style={styles.InputViewStyle}>
            <FloatingLabelInput
              ref={(o) => { this.MobileNo = o; }}
              returnKeyType={'next'}
              label="Phone Number"
              value={pno}
              type={false}
              icon={false}
              labelStyle={styles.InputLabelStyle}
              textStyle={styles.InputTextStyle}
              onChange={(text) => { this.setState({ pno: text }); }}
              bottomWidth={StyleSheet.hairlineWidth}
              bottomColor={'#5757563f'}
              onSubmitEditing={() => {
                if (this.JobTitle) {
                  this.JobTitle.focus();
                }
              }}
            />
          </View>

          <View style={styles.InputViewStyle}>
            <FloatingLabelInput
              ref={(o) => { this.JobTitle = o; }}
              returnKeyType={'next'}
              label="Job Title"
              value={jTitle}
              type={false}
              icon={false}
              labelStyle={styles.InputLabelStyle}
              textStyle={styles.InputTextStyle}
              onChange={(text) => { this.setState({ jTitle: text }); }}
              bottomWidth={StyleSheet.hairlineWidth}
              bottomColor={'#5757563f'}
              onSubmitEditing={() => {
                if (this.SkypeId) {
                  this.SkypeId.focus();
                }
              }}
            />
          </View>

          <View style={styles.InputViewStyle}>
            <FloatingLabelInput
              ref={(o) => { this.SkypeId = o; }}
              returnKeyType={'done'}
              label="Skype ID"
              value={sid}
              type={false}
              icon={false}
              labelStyle={styles.InputLabelStyle}
              textStyle={styles.InputTextStyle}
              onChange={(text) => { this.setState({ sid: text }); }}
              bottomWidth={StyleSheet.hairlineWidth}
              bottomColor={'#5757563f'}
              onSubmitEditing={() => { Keyboard.dismiss(); }}
            />
          </View>

          <View style={styles.LabelItemStyle}>
            <LabelItem
              direction={'column'}
              label="Language"
              item={'English(US)'}
              icon={true}
              IconName={'arrow-right'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              onChange={(text) => { this.setState({ email: text }) }}
            />
            <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} />
          </View>

          <View style={styles.LabelItemStyle}>
            <LabelItem
              direction={'column'}
              label="Timezone"
              item={'(GMT+8.00)Hong Kong'}
              icon={true}
              IconName={'arrow-right'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              onChange={(text) => { this.setState({ email: text }) }}
            />
             <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} />
          </View>

          <View style={styles.ChangePasswordView}>
            <Text style={styles.ChangePasswordText}>Change Password</Text>
            <Icon type='SimpleLineIcons' name='arrow-right' style={styles.CArrow} />
          </View>
           <TouchableOpacity
            activeOpacity={0.8}
            style={styles.BtnView}
            onPress={() => { /*this.props.navigation.navigate('Signup')*/ }}
          >
            <Text style={styles.BtnText}>Update Profile</Text>
          </TouchableOpacity>

        </KeyboardAwareScrollView>
      </View>
    )
  }
}
