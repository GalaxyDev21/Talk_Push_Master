import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';
import CustomHeader from '../../components/header';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import LabelItem from '../../components/LabelItem';
import funnel from '../../assets/icons/funnel_1.png';
import { PRI_BLACK, PRI_WHITE, PRI_GREEN, SEC_RED, SEC_GRAY } from '../../assets/consts';
import colors from '../../config/styles';
import CStatusBar from '../../components/CStatusBar';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeaderView: {
    marginTop: height_unit * 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRI_WHITE,
    height: height_unit * 100,
    justifyContent: 'space-between',
    paddingHorizontal:width_unit * 30,
    borderBottomWidth: 0.5,
    borderBottomColor: '#5757563f',
  },
  HeadSubView: {
    flexDirection:'row',
    alignItems: 'flex-end',
  },
  HeadImg: {
    resizeMode: 'contain',
    height: height_unit * 42,
    width: height_unit * 42,
  },
  HeadTitle: {
    fontFamily: colors.fonts.raleway.bold,
    color: PRI_GREEN,
    fontSize: width_unit * 28,
    paddingHorizontal:width_unit * 20,
  },
  HeadCircleIcon: {
    opacity: 0.5,
    color: '#575756',
    fontSize: width_unit * 50,
  },
  LabelItemView: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#5757563f',
    backgroundColor: '#fff',
    width: width,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  LItemLabel: {
    marginBottom: 5,
    // opacity: 0.5,
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 28,
    color: PRI_GREEN,
  },
  LItemText: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#000',
    opacity: 0.8,
    fontSize: width_unit * 28,
    marginLeft: 3,
  },
  RightArrow: {
    marginRight: 18,
    color: PRI_GREEN,
    fontSize: height_unit * 28,
  },
  BtnView: {
    height: width_unit * 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#575756',
  },
  BtnText: {
    fontSize: height_unit * 30,
    color: '#fff',
    fontFamily: colors.fonts.raleway.regular,
  },
});

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  filterMessage() {
    this.props.navigation.state.params.returnFilter(this.state);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.MainView}>
        <CStatusBar />
        <CustomHeader
          boxShadow={true}
          gotoFilter={() => this.props.navigation.navigate('Filter')}
          gotoNotification={() => this.props.navigation.navigate('Notification')}
          gotoProfile={() => this.props.navigation.navigate('Profile')}
        />

        <ScrollView bounces={false}>
          <View style={styles.HeaderView}>
            <View style={styles.HeadSubView}>
              <Image source={funnel} style={styles.HeadImg} />
              <Text style={styles.HeadTitle}>Filter results</Text>
            </View>
            <Icon
              name='ios-close-circle-outline'
              style={styles.HeadCircleIcon}
              onPress={()=>this.props.navigation.goBack()}
            />
          </View>

          {/* <View style={styles.LabelItemView}> */}
            <LabelItem
              direction={'row'}
              label="campaign:"
              item={'Campaign'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              bottomWidth={0.5}
              bottomColor={'#5757563f'}
            />
            {/* <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} /> */}
          {/* </View> */}

          {/* <View style={styles.LabelItemView}> */}
            <LabelItem
              direction={'row'}
              label="status:"
              item={'Status'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              bottomWidth={0.5}
              bottomColor={'#5757563f'}
            />
            {/* <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} /> */}
          {/* </View> */}

          {/* <View style={styles.LabelItemView}> */}
            <LabelItem
              direction={'row'}
              label="from:"
              item={'Candidate Name, Email, Phone Number'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              bottomWidth={0.5}
              bottomColor={'#5757563f'}
            />
            {/* <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} /> */}
          {/* </View> */}

          {/* <View style={styles.LabelItemView}> */}
            <LabelItem
              direction={'row'}
              label="id:"
              item={'Candidate ID'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              bottomWidth={0.5}
              bottomColor={'#5757563f'}
            />
            {/* <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} /> */}
          {/* </View> */}
          
          {/* <View style={styles.LabelItemView}> */}
            <LabelItem
              direction={'row'}
              label="schduled:"
              item={'Date Range'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              bottomWidth={0.5}
              bottomColor={'#5757563f'}
            />
            {/* <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} /> */}
          {/* </View> */}

          {/* <View style={styles.LabelItemView}> */}
            <LabelItem
              direction={'row'}
              label="label:"
              item={'Label'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              bottomWidth={0.5}
              bottomColor={'#5757563f'}
            />
            {/* <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} /> */}
          {/* </View> */}

          {/* <View style={styles.LabelItemView}> */}
            <LabelItem
              direction={'row'}
              label="in:"
              item={'Location'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              bottomWidth={0.5}
              bottomColor={'#5757563f'}
            />
            {/* <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} /> */}
          {/* </View> */}

          {/* <View style={styles.LabelItemView}> */}
            <LabelItem
              direction={'row'}
              label="has:"
              item={'File Attachment'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              bottomWidth={0.5}
              bottomColor={'#5757563f'}
            />
            {/* <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} /> */}
          {/* </View> */}

          {/* <View style={styles.LabelItemView}> */}
            <LabelItem
              direction={'row'}
              label="completion:"
              item={'Method'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              bottomWidth={0.5}
              bottomColor={'#5757563f'}
            />
            {/* <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} /> */}
          {/* </View> */}
          
          {/* <View style={styles.LabelItemView}> */}
            <LabelItem
              direction={'row'}
              label="added:"
              item={'Date Range'}
              labelStyle={styles.LItemLabel}
              textStyle={styles.LItemText}
              bottomWidth={0.5}
              bottomColor={'#5757563f'}
            />
            {/* <Icon type='SimpleLineIcons' name='arrow-right' style={styles.RightArrow} /> */}
          {/* </View> */}

          <TouchableOpacity activeOpacity={0.8} style={styles.BtnView} onPress={() => { this.filterMessage() }}>
            <Text style={styles.BtnText}>Filter Messages</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }
}