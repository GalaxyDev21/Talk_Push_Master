import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import { Icon } from 'native-base';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import { PRI_WHITE, PRI_GREEN, SEC_RED, SEC_GRAY } from '../../assets/consts';
import colors from '../../config/styles';
import CStatusBar from '../../components/CStatusBar';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  BtnText: {
    fontFamily: colors.fonts.raleway.regular,
    fontSize: height_unit * 28,
    color: '#fff',
  },
  BtnView: {
    marginTop: height_unit * 22,
    height: width_unit * 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#575756',
    width: width,
  },
  PlusIcon: {
    color: PRI_GREEN,
    fontSize: width_unit * 38,
  },
  AddSubView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width_unit * 60,
    height: width_unit * 60,
    borderRadius: width_unit * 30,
    backgroundColor: SEC_GRAY,
  },
  AddView: {
    padding: height_unit * 22,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#5757563f',
    backgroundColor: '#fff',
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  InputStyle: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#575756',
    fontSize: width_unit * 28,
  },
  InputViewStyle: {
    flex: 1,
    marginLeft: width_unit * 30,
  },
  InputView2Style: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SubView: {
    paddingHorizontal: height_unit * 14,
  },
  InputBottomBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#5757563f',
    backgroundColor: '#fff',
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  InputLabelStyle: {
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 24,
    color: '#575756',
    opacity: 0.5,
  },
  OtherDetailView: {
    padding: height_unit * 22,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#5757563f',
    backgroundColor: '#fff',
    width: width,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  OtherDetailSubView: {
    marginTop: height_unit * 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ODLeftView: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRightColor: '#5757563f',
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  MinusView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width_unit * 60,
    height: width_unit * 60,
    borderRadius: width_unit * 30,
    backgroundColor: SEC_GRAY,
  },
  MinusIcon: {
    color: SEC_RED,
    fontSize: width_unit * 38,
  },
  InputTextStyle: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#575756',
    fontSize: width_unit * 28,
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
  HeadIcon: {
    color: PRI_WHITE,
  },
  HeadTitle: {
    fontFamily: colors.fonts.raleway.regular,
    color: PRI_WHITE,
    fontSize: width_unit * 34,
    paddingLeft: width_unit * 20,
  },
  ScrollStyle: {
    backgroundColor: '#FFF',
  },
  ProfileView: {
    width: width,
    height: height_unit * 444,
    backgroundColor: '#87c93026',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  ProfileText: {
    fontFamily: colors.fonts.raleway.bold,
    fontSize: width_unit * 50,
    color: '#fff',
    backgroundColor: PRI_GREEN,
    width: width_unit * 150,
    height: width_unit * 150,
    borderRadius: width_unit * 75,
    lineHeight: width_unit * 150,
    textAlign: 'center',
  },
  ProfileUserName: {
    fontFamily: colors.fonts.raleway.bold,
    fontSize: width_unit * 38,
    position: 'absolute',
    left: width_unit * 36,
    bottom: height_unit * 30,
    color: PRI_GREEN,
  },
});
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      pno: '',
      edu: '',
      labelText: '',
      Detail: '',
    };
  }

  render() {
    const { name, location, pno, edu, labelText, Detail } = this.state;
    return (
      <View style={styles.MainView}>
        <CStatusBar />

        <View style={styles.HeaderView}>
          <View style={styles.HeadSubView}>
            <Icon
              name='ios-arrow-back'
              style={styles.HeadIcon}
              onPress={() => this.props.navigation.goBack()}
            />
            <Text style={styles.HeadTitle}>Edit Candidate Profile</Text>
          </View>
        </View>

        <ScrollView style={styles.ScrollStyle} bounces={false}>
          
          <View style={styles.ProfileView}>
            <Text style={styles.ProfileText}>MA</Text>
            <Text style={styles.ProfileUserName}>Max Ambruster</Text>
          </View>

          <View style={styles.SubView}>
            <View style={styles.InputBottomBorder}>
              <FloatingLabelInput
                ref={(o) => { this.NameInput = o; }}
                label="Name"
                value={name}
                returnKeyType={'next'}
                type={false}
                icon={false}
                labelStyle={styles.InputLabelStyle}
                textStyle={styles.InputTextStyle}
                onChange={(text) => { this.setState({ name: text }); }}
                onSubmitEditing={() => {
                  if (this.LocationInput) {
                    this.LocationInput.focus();
                  }
                }}
              />
            </View>

            <View style={styles.InputBottomBorder}>
              <FloatingLabelInput
                ref={(o) => { this.LocationInput = o; }}
                label="Location"
                returnKeyType={'next'}
                value={location}
                type={false}
                icon={false}
                labelStyle={styles.InputLabelStyle}
                textStyle={styles.InputTextStyle}
                onChange={(text) => { this.setState({ location: text }); }}
                onSubmitEditing={() => {
                  if (this.PnoInput) {
                    this.PnoInput.focus();
                  }
                }}
              />
            </View>

            <View style={styles.InputBottomBorder}>
              <FloatingLabelInput
                ref={(o) => { this.PnoInput = o; }}
                label="Phone Number"
                returnKeyType={'next'}
                value={pno}
                type={false}
                icon={false}
                labelStyle={styles.InputLabelStyle}
                textStyle={styles.InputTextStyle}
                onChange={(text) => { this.setState({ pno: text }) }}
                onSubmitEditing={() => {
                  if (this.Education) {
                    this.Education.focus();
                  }
                }}
              />
            </View>
            
            <View style={styles.InputBottomBorder}>          
              <FloatingLabelInput
                ref={(o) => { this.Education = o; }}
                label="Education"
                returnKeyType={'next'}
                value={edu}
                type={false}
                icon={false}
                labelStyle={styles.InputLabelStyle}
                textStyle={styles.InputTextStyle}
                onChange={(text) => { this.setState({ edu: text }) }}
                onSubmitEditing={() => {
                  if (this.labelText) {
                    this.labelText.focus();
                  }
                }}
              />
            </View>
            
            <View style={styles.OtherDetailView}>          
              <Text style={styles.InputLabelStyle}>Other Details</Text>
              <View style={styles.OtherDetailSubView}>
                <View style={styles.ODLeftView}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.MinusView}
                  >
                    <Icon type={'MaterialCommunityIcons'} name={'minus'} style={styles.MinusIcon}/>
                  </TouchableOpacity>

                  <View style={styles.InputViewStyle}>
                    <TextInput
                      ref={(o) => { this.labelText = o; }}
                      underlineColorAndroid='transparent'
                      padding={0}
                      placeholder='Label'
                      returnKeyType={'next'}
                      value={labelText}
                      placeholderTextColor='#57575680'
                      style={styles.InputStyle}
                      onChangeText={(text) => { this.setState({ labelText: text }) }}
                      onSubmitEditing={() => {
                        if (this.DetailInput) {
                          this.DetailInput.focus();
                        }
                      }}
                    />
                  </View>

                </View>
                <View style={styles.InputView2Style}>
                  <View style={styles.InputViewStyle}>
                    <TextInput
                      ref={(o) => { this.DetailInput = o; }}
                      underlineColorAndroid='transparent'
                      padding={0}
                      value={Detail}
                      returnKeyType={'done'}
                      placeholder='Details'
                      placeholderTextColor='#57575680'
                      style={styles.InputStyle}
                      onChangeText={(text) => { this.setState({ Detail: text }) }}
                      onSubmitEditing={() => { Keyboard.dismiss(); }}
                    />
                  </View>
                </View>
              </View>
            </View>
            
            <TouchableOpacity activeOpacity={0.8} style={styles.AddView}>
              <View style={styles.AddSubView}>
                <Icon type={'MaterialCommunityIcons'} name={'plus'} style={styles.PlusIcon}/>
              </View>
              <Text style={[styles.InputTextStyle, { marginLeft: width_unit * 30 }]}>Add Details</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.BtnView}
            // onPress={() => {}}
          >
            <Text style={styles.BtnText}>Update Profile</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }
}