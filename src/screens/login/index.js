import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Footer,
  Left,
  Right,
  Body,
  StyleProvider,
  CardItem,
  Card,
  ListItem,
} from "native-base";
import FloatingLabelInput from '../../components/FloatingLabelInput';
import logo from '../../assets/Logo.png';
import { PRI_GREEN } from '../../assets/consts';
import colors from '../../config/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { height } = Dimensions.get("window");
const unit = height / 1334;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRI_GREEN,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  MainView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontFamily: colors.fonts.roboto.regular,
    fontSize: unit * 24,
    color: '#fff',
    opacity: 0.5,
  },
  TextStyle: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#fff',
    fontSize: unit * 28,
  },
  SignBtnView: {
    height: unit * 120,
    backgroundColor: "#575756",
    alignContent: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: unit * 240,
    height: unit * 240,
    alignSelf: 'center',
    marginTop: unit * 200,
  },
  buttonText: {
    color: "#fff",
    textAlign: 'center',
    fontFamily: colors.fonts.raleway.regular,
    fontSize: unit * 30,
  },
  ForgotBtnView: {
    height: unit * 120,
    alignContent: 'center',
    justifyContent: 'center',
  },
  startText: {
    fontSize: unit * 50,
    textAlign: 'center',
    color: '#fff',
    marginTop: unit * 160,
    fontFamily: colors.fonts.raleway.regular,
  },
  OopsText: {
    fontSize: unit * 50,
    textAlign: 'center',
    color: '#fff',
    marginTop: unit * 80,
  },
  ErrorText: {
    fontSize: unit * 30,
    textAlign: 'center',
    color: '#a54242',
    marginTop: unit * 20,
    lineHeight: unit * 40,
    fontFamily: colors.fonts.roboto.regular,
  },
});

export default class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {
      invalid: false,
      email: __DEV__ ? 'xyz@gmail.com' : '',
      password: __DEV__ ? '1122334455' : '',
      password_type: true,
      // setOpacity: 1,
    }
  }

  login = () => {
    const { email , password } = this.state;
    const { navigation } = this.props;
    // this.setState({ setOpacity: 0.5 }, () => {
      if (email =='' || password=='') {
        this.setState({invalid:true});
        return;
      }
      else {
        navigation.navigate('Home');
      }
    // });
  }

  render() {
    const {
      invalid,
      // setOpacity,
    } = this.state;
    return (
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.MainView}>
          <Image source={logo} resizeMode='cover' style={styles.logo} />
            {!invalid ?
              <Text style={styles.startText}>Get Started!</Text> :
                <View style={{ width: '90%' }}>
                  <Text style={styles.OopsText}>Oops...</Text>
                  <Text style={styles.ErrorText}>
                    {'Seems like you entered an invalid Email or Password. Would you like to try again?'}
                  </Text>
              </View>
            }
        </View>

        <View style={{ height: unit * 510 }}>
          <FloatingLabelInput
            ref={(o) => { this.emailInput = o; }}
            returnKeyType={'next'}
            label="Email"
            value={this.state.email}
            type={false}
            icon={false}
            // blurOnSubmit={false}
            labelStyle={styles.labelStyle}
            textStyle={styles.TextStyle}
            onChange={(text) => { this.setState({ email: text }) }}
            bottomWidth={StyleSheet.hairlineWidth}
            bottomColor={'white'}
            onSubmitEditing={() => {
              if (this.passwordInput) {
                this.passwordInput.focus();
              }
            }}
          />
          <FloatingLabelInput
            ref={(o) => { this.passwordInput = o; }}
            label="Password"
            value={this.state.password}
            type={this.state.password_type}
            icon={true}
            IconName={this.state.password_type?'eye':'eye-off'}
            passwordShow = {()=>{this.setState({password_type:!this.state.password_type})}}
            labelStyle={styles.labelStyle}
            textStyle={styles.TextStyle}
            onChange={(text) => { this.setState({ password: text }) }}
            onSubmitEditing={this.login}
          />
          {/*  <TouchableOpacity  style={{ height: unit * 120, backgroundColor: "#575756", alignContent: 'center', justifyContent: 'center', opacity: setOpacity }} onPress={() => {this.login() }}> */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.SignBtnView}
              onPress={this.login}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.ForgotBtnView}
              onPress={() => {this.props.navigation.navigate('ForgetPassword') }}
            >
              <Text style={[styles.buttonText, { fontSize: unit * 28 }]}>Forget Password?</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}