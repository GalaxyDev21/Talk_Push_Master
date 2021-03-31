import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import { Icon } from 'native-base'

const { width, height } = Dimensions.get("window");
const unit = height / 1334;

const styles = StyleSheet.create({
  container: {
    paddingVertical: unit * 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  innerView: {
    backgroundColor: 'white',
    opacity: 0.3,
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  innerCont: {
    marginHorizontal: unit * 22,
  },
  iconStyle: {
    fontSize: 18,
    paddingRight: unit * 36,
    color:'white',
    opacity: 0.5,
  },
  width8: {
    width: width * 0.8,
  }
});
class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  focus = () => {
    if(this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      label,
      labelStyle,
      bottomWidth,
      bottomColor,
      type,
      textStyle,
      IconName,
      passwordShow,
      icon,
      onChange,
    } = this.props;

    return (
      <View style={[styles.container, { borderBottomColor: bottomColor, borderBottomWidth: bottomWidth }]}>
        <View style={styles.innerView} />
        <View style={styles.innerCont} >
          <Text style={labelStyle}>{label}</Text>
          <TextInput
            {...this.props}
            ref={(o) => { this.input = o; }}
            style={[textStyle, styles.width8]}
            underlineColorAndroid='transparent'
            onChangeText={(text) => { 
              if(typeof onChange === 'function') {
                onChange(text);
              }}}
            onChange={() => {}}
            padding={0}
            secureTextEntry={type}
          />
        </View>
        {icon ? (
          <Icon type='Feather' name={IconName} style={styles.iconStyle} onPress={passwordShow} />
        ) : (null)}
      </View>
    );
  }
}
export default FloatingLabelInput;