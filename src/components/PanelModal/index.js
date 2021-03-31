import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import AssignLabel from '../../assets/icons/assign_label.png';
import Hire from '../../assets/icons/hire.png';
import PutOnHold from '../../assets/icons/put_on_hold.png';
import Recruiter from '../../assets/icons/recruiter.png';
import Reject from '../../assets/icons/reject.png';
import ShortList from '../../assets/icons/shotlist.png';
import colors from '../../config/styles';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: '#fff',
    paddingVertical: height_unit * 40,
    elevation: 50,
    position:'absolute',
    bottom:0,
    left:0,
  },
  ActionText: {
    fontFamily: colors.fonts.raleway.regular,
    fontSize: height_unit * 32,
    paddingHorizontal: width_unit * 40,
  },
  SubView: {
    flexDirection: 'row',
    paddingVertical: height_unit * 40,
  },
  CmnWidth: {
    width: width / 3,
  },
  CmnViewAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextViewStyles: {
    backgroundColor: '#f0f0f0',
    width: width_unit * 100,
    height: width_unit * 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width_unit * 50,
  },
  TextsSty: {
    fontFamily: colors.fonts.raleway.regular,
    fontSize: height_unit * 24,
    alignItems: 'center',
    marginTop: height_unit * 20,
  },
  ImgStyle: {
    resizeMode: 'contain',
  },
});
export default class PanelModal extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View style={styles.MainView}>
        <Text style={styles.ActionText}>Actions</Text>
        <View style={styles.SubView}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.CmnWidth}
            onPress={()=>this.props.goAssignLabel()}
          >
            <View style={styles.CmnViewAlign}>
              <View style={styles.TextViewStyles}>
                <Image source={AssignLabel} style={[styles.ImgStyle, { height: height_unit * 60 }]} />
              </View>
              <Text style={styles.TextsSty}>Assign Label</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.CmnWidth}
          >
            <View style={styles.CmnViewAlign}>
              <View style={styles.TextViewStyles}>
                <Image source={ShortList} style={[styles.ImgStyle, { height: height_unit * 57 }]} />
              </View>
              <Text style={styles.TextsSty}>ShortList</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.CmnWidth}
          >
            <View style={styles.CmnViewAlign}>
              <View style={styles.TextViewStyles}>
                <Image source={PutOnHold} style={[styles.ImgStyle, { height: height_unit * 56 }]} />
              </View>
              <Text style={styles.TextsSty}>Put on hold</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.CmnWidth}
          >
            <View style={styles.CmnViewAlign}>
              <View style={styles.TextViewStyles}>
                <Image source={Reject} style={[styles.ImgStyle, { height: height_unit * 65 }]} />
              </View>
              <Text style={styles.TextsSty}>Reject</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.CmnWidth}
          >
            <View style={styles.CmnViewAlign}>
              <View style={styles.TextViewStyles}>
                <Image source={Hire} style={[styles.ImgStyle, { height: height_unit * 65 }]} />
              </View>
              <Text style={styles.TextsSty}>Hire</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.CmnWidth}
            onPress={()=>this.props.goAssignRecruiter()}
          >
            <View style={styles.CmnViewAlign}>
              <View style={styles.TextViewStyles}>
                <Image source={Recruiter} style={[styles.ImgStyle, { height: height_unit * 61 }]} />
              </View>
              <Text style={styles.TextsSty}>Assign recruiter</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}