import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from 'react-native';
import _ from 'lodash';
import { Icon } from 'native-base';
import Autocomplete from '../../libs/react-native-autocomplete-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import { PRI_WHITE, PRI_GREEN } from '../../assets/consts';
import colors from '../../config/styles';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
  AutoCView: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cecece',
  },
  BtnText: {
    fontSize: height_unit * 30,
    fontFamily: colors.fonts.raleway.regular,
    color: '#fff',
  },
  InputLabelText: {
    paddingHorizontal:width_unit*36,
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 24,
    color: '#5757567f',
  },
  BtnView: {
    height: width_unit * 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#575756',
    width: width,
  },
  InputViewTextStyle: {
    paddingHorizontal: width_unit * 36,
    fontFamily: colors.fonts.raleway.regular,
    color: '#575756',
    fontSize: width_unit * 28, 
  },
  NameText: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#575756',
    fontSize: width_unit * 22,
  },
  InputBorderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cecece',
  },
  EmailText: {
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 20,
    color: '#5757567f',
  },
  NameEmailView: {
    flexDirection: 'column',
    width: '80%',
    justifyContent: 'center',
  },
  TitleView: {
    flexDirection: 'column',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ItemText: {
    fontFamily: colors.fonts.raleway.bold,
    fontSize: width_unit * 25,
    color: '#fff',
    backgroundColor: '#cecece',
    width: width_unit * 75,
    height: width_unit * 75,
    borderRadius: width_unit * 75,
    lineHeight: width_unit * 75,
    textAlign: 'center',
  },
  ItemsView: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: height_unit * 22,
    paddingBottom: height_unit * 22,
  },
  ListStyles: {
    marginRight: width_unit * 36,
    marginLeft: width_unit * 56,
    borderWidth: 1,
    zIndex: 112,
    borderColor: '#cecece',
    borderTopWidth: 1,
  },
  KAScrollStyle: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: width_unit * 120,
  },
  ProfileView: {
    width: '100%',
    height: height_unit * 444,
    backgroundColor: '#87c93026',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
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
  UserName: {
    fontFamily: colors.fonts.raleway.bold,
    fontSize: width_unit * 38,
    position: 'absolute',
    left: width_unit * 36,
    bottom: height_unit * 30,
    color: PRI_GREEN,
  },
  MainView: {
    flex: 1,
  },
  HTitle: {
    fontFamily: colors.fonts.raleway.regular,
    color: PRI_WHITE,
    fontSize: width_unit * 34,
    paddingLeft: 20 * width_unit,
  },
  HBackIcon: {
    color: PRI_WHITE,
  },
  HeaderView: {
    backgroundColor: PRI_GREEN,
    height: height_unit * 136,
    width: width,
    paddingHorizontal: width_unit * 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HSubView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  autocompleteContainer2: {
    borderWidth: 0,
  },
  InputLabelStyle: {
    marginTop: 10,
    paddingHorizontal:width_unit*36,
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 24,
    color: '#5757567f',
  },
  InputTextStyle: {
    paddingHorizontal:width_unit*36,
    fontFamily: colors.fonts.raleway.regular,
    color: '#575756',
    fontSize: width_unit * 28,
  },
});

const ArrayData = [
  {
    id: 1,
    title: 'MA',
    name: 'Jennifer Sy',
    email: 'Jennifersy@yahoo.com',
  },
  {
    id: 2,
    title: 'SG',
    name: 'Sejal Gupta',
    email: 'sgupta@gmail.com',
  },
  {
    id: 3,
    title: 'MV',
    name: 'Mahima Vyas',
    email: 'mahi123@gmail.com',
  },
];

export default class ShareProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      msg: '',
      cData: ArrayData,
      keyboardOpen: false,
      share: '',
    }
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = () => {
    this.setState({ keyboardOpen: true });
  }

  keyboardDidHide = () => {
    this.setState({ keyboardOpen: false });
  }

  findFilm(email) {
    if (email === '') {
      return [];
    }
    const regex = new RegExp(`${email.trim()}`, 'i');
    const ret = _.filter(ArrayData, item => item.email.search(regex) >= 0);
    console.log(ret);
    return ret;
  }

  setMailId(text) {
    const ArrayData = this.findFilm(text);
    this.setState({ email: text, cData: ArrayData });
  }

  renderTextInput = () => {
    return(
      <FloatingLabelInput
        ref={(o) => { this.emailInput = o; }}
        label="Email / Name"
        returnKeyType={'next'}
        value={this.state.email}
        type={false}
        icon={false}
        labelStyle={styles.InputLabelStyle}
        textStyle={styles.InputTextStyle}
        onChange={(text) => { this.setMailId(text); }}
      />
    );
  }

  render() {
    const { email, cData, keyboardOpen, msg, share} = this.state;
    return (
      <View style={styles.MainView}>

        <View style={styles.HeaderView}>
          <View style={styles.HSubView}>
            <Icon
              name='ios-arrow-back'
              style={styles.HBackIcon}
              onPress={() => this.props.navigation.goBack()}
            />
            <Text style={styles.HTitle}>Share Profile</Text>
          </View>
        </View>

        <KeyboardAwareScrollView
          bounces={false}
          contentContainerStyle={styles.KAScrollStyle}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.ProfileView}>
            <Text style={styles.ProfileText}>MA</Text>
            <Text style={styles.UserName}>Max Ambruster</Text>
          </View>

          <View style={styles.AutoCView}>
            <Autocomplete
              autoCapitalize="none"
              autoCorrect={false}
              containerStyle={styles.autocompleteContainer}
              inputContainerStyle={styles.autocompleteContainer2}
              listStyle={styles.ListStyles}
              data={email === '' ? [] : cData}
              defaultValue={email}
              onChangeText={(text) => { this.setMailId(text); }}
              renderTextInput={this.renderTextInput}
              placeholder="Email / Name"
              renderItem={(item, index) => (
                <TouchableOpacity
                  key={`id_${index}`}
                  activeOpacity={0.8}
                  onPress={() => this.setState({ email: item.email, cData: [] }, () => {
                    if (this.MsgInput) {
                      this.MsgInput.focus();
                    }
                  })}
                  style={styles.ItemsView}
                >
                  <View style={styles.TitleView}>
                    <Text style={styles.ItemText}>{item.title}</Text>
                  </View>

                  <View style={styles.NameEmailView}>
                    <Text style={styles.NameText}>{item.name}</Text>
                    <Text style={styles.EmailText}>{item.email}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={styles.InputBorderBottom}>
            <FloatingLabelInput
              ref={(o) => { this.MsgInput = o; }}
              label="Message / Comments"
              returnKeyType={'next'}
              value={msg}
              type={false}
              icon={false}
              labelStyle={styles.InputLabelText}
              textStyle={styles.InputViewTextStyle}
              onChange={(text) => { this.setState({ msg: text }) }}
              onSubmitEditing={() => {
                if (this.shareInput) {
                  this.shareInput.focus();
                }
              }}
            />
          </View>

          <View style={styles.InputBorderBottom}>
            <FloatingLabelInput
              ref={(o) => { this.shareInput = o; }}
              label="Sharing with"
              returnKeyType={'done'}
              value={share}
              type={false}
              icon={false}
              labelStyle={styles.InputLabelText}
              textStyle={[styles.InputViewTextStyle, { color: PRI_GREEN }]}
              onChange={(text) => { this.setState({ share: text }) }}
              onSubmitEditing={() => { Keyboard.dismiss(); }}
            />
          </View>
        </KeyboardAwareScrollView>

        { keyboardOpen ? (null) : (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.BtnView}
            onPress={() => {}}
          >
            <Text style={styles.BtnText}>Share Profile</Text>
          </TouchableOpacity>
        )}
        

      </View>
    )
  }
}