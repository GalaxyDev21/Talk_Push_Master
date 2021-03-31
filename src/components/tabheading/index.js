import React, { Component } from 'react'
import { View, Text } from 'react-native'
export default class TabHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    )
  }

}