import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { PRI_WHITE } from '../../assets/consts';

const { height } = Dimensions.get("window");
const unit = height / 1334;

const styles = StyleSheet.create({
  MainView: {
    paddingVertical: unit * 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent:'flex-start',
    backgroundColor: PRI_WHITE,
  },
});
class LabelItem extends Component {

  render() {
    const { direction,label, ...props } = this.props;

    return (
      <View style={[styles.MainView, { borderBottomColor: this.props.bottomColor, borderBottomWidth: this.props.bottomWidth }]}>
        <View style={ direction === 'row' ? { marginHorizontal: unit * 36, flexDirection: direction, alignItems:'center'} :
        { marginHorizontal: unit * 36, flexDirection: direction }} >
          <Text style={this.props.labelStyle}>{label}</Text>
          <Text
            {...props}
            style={this.props.textStyle}
            underlineColorAndroid='transparent'
            onChangeText={(text) => { this.props.onChange(text) }}
            padding={0}>{this.props.item}
          </Text>
        </View>
        {/* {this.props.icon && <Icon type='SimpleLineIcons' name={this.props.IconName} style={{ paddingRight: unit * 36, color: PRI_GREEN, fontSize:unit*28 }}  />} */}
      </View>
    );
  }
}
export default LabelItem