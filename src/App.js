import React, { Component } from "react";
import { StatusBar, View, Easing, Animated, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/login';
import Home from './screens/home';
import Profile from "./screens/profile";
import Filter from './screens/filter';
import Notification from './screens/notification';
import ChatDetail from "./screens/chat";
import ForgetPassword from './screens/forgetpassword';
import AssignLabel from "./screens/assignlabel";
import AssignRecruiter from "./screens/assignrecruiter";
import CandidateProfile from './screens/candidateprofile';
import ShareProfile from "./screens/candidateprofile/shareprofile";
import EditProfile from './screens/candidateprofile/editprofile';
import VoiceCall from "./screens/chat/VoiceCall";
import comment from './screens/candidateprofile/comment';
import AddTag from './screens/candidateprofile/AddTag';
import colors from "./config/styles";

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      const height = layout.initHeight;
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });
      return { opacity, transform: [{ translateY }] }
    },
  }
}
const Nav1 = StackNavigator({
  Login: { screen: LoginScreen, },
  Home: { screen: Home },
  Profile: { screen: Profile },
  Filter: { screen: Filter },
  Notification: { screen: Notification },
  ChatDetail:{screen:ChatDetail}, 
  ForgetPassword:{screen:ForgetPassword},
  AssignLabel:{screen:AssignLabel},
  AssignRecruiter:{screen:AssignRecruiter},
  CandidateProfile:{screen:CandidateProfile},
  ShareProfile:{screen:ShareProfile}, 
  EditProfile:{screen:EditProfile},
  VoiceCall:{screen:VoiceCall}, 
  comment:{screen:comment},
  AddTag:{screen:AddTag},
}, {
    headerMode: 'none',
    initialRouteName: 'Login',
    transitionConfig,
    navigationOptions: {
      headerVisible: false,
    }
  });
export default class SetUP extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount() {
    console.disableYellowBox=true;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={colors.statusBarColor}
          barStyle="light-content"
          translucent={false}
        />
        {/* <CStatusBar /> */}
        <Nav1 />
      </View>)
  }

}

