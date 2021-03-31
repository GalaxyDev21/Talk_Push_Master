import React, { Component } from 'react';
import { WebView } from 'react-native';

class ForgetPassword extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://my.talkpush.com/managers/password/new'}}
        style={{marginTop: 0}}
      />
    );
  }
}
export default ForgetPassword;