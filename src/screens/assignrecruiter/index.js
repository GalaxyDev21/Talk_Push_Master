import React, { Component } from 'react';
import {
  View,
  Text,
  Image, 
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import { Icon, Content } from 'native-base';
import { PRI_BLACK, PRI_WHITE, PRI_GREEN, SEC_GRAY } from '../../assets/consts';
import colors from '../../config/styles';
import CStatusBar from "../../components/CStatusBar";

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
  CmnAlignment: {
    justifyContent: 'center',
  },
  MainView: {
    flex: 1,
  },
  ContentStyle: {
    backgroundColor: '#fff',
    marginTop: height_unit * 20,
  },
  RecentText: {
    fontFamily: colors.fonts.roboto.regular,
    color: PRI_GREEN,
    fontSize: width_unit * 24,
    paddingHorizontal: 30 * width_unit,
  },
  ScrollSubView: {
    flex: 1,
    marginTop: height_unit * 30,
  },
  InputStyle: {
    fontFamily: colors.fonts.raleway.regular,
    color: PRI_GREEN,
    padding: width_unit * 36,
    backgroundColor: '#f9f9f9',
    color: PRI_BLACK,
  },
  HeaderBackIcon: {
    color: PRI_WHITE,
  },
  ScrollStyle: {
    backgroundColor: PRI_WHITE,
  },
  HeaderTitle: {
    fontFamily: colors.fonts.raleway.regular,
    color: PRI_WHITE,
    fontSize: width_unit * 34,
    paddingLeft: 20 * width_unit,
  },
  HeaderSubView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderView: {
    backgroundColor: PRI_GREEN,
    height: height_unit * 136,
    width: width,
    paddingHorizontal: width_unit * 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
  },
  NameText: {
    marginBottom: 3,
    fontSize: width_unit * 28,
    fontFamily: colors.fonts.raleway.regular,
    color: PRI_BLACK,
  },
  ImageStyle: {
    height: height_unit * 90,
    width: height_unit * 90,
    borderRadius: height_unit * 45,
  },
  list_item: {
    height: height_unit * 150,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width_unit * 30,
    borderBottomColor: '#e8e8e9',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  list_avatar: {
    height: width_unit * 90,
    width: width_unit * 90,
    backgroundColor: SEC_GRAY,
    borderRadius: width_unit * 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width_unit * 20,
  },
  list_avatar_text: {
    color: PRI_GREEN,
    fontSize: height_unit * 32,
    textAlign: 'center',
    fontFamily: colors.fonts.raleway.black,
  },
});
export default class AssignRecruiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      data: [
        {
          first_name: 'Lucas',
          last_name: 'Bierfreund',
          avatar: null,
        },
        {
          first_name: 'Jiji',
          last_name: 'Sy',
          avatar: null,
        },
      ],
    };
  }

  renderItem = ({ item: rowData }) => {
    return (
      <TouchableOpacity style={styles.list_item} activeOpacity={0.8}>
        <View activeOpacity={0.8} style={styles.list_avatar}>
          <View>
            {rowData.avatar ? 
            <Image source={rowData.avatar} resizeMode='cover' style={styles.ImageStyle} /> 
            : <Text style={styles.list_avatar_text}>{rowData.first_name[0] + rowData.last_name[0]}</Text>}
          </View>
        </View>
        <View style={styles.CmnAlignment}>
          <Text style={styles.NameText}>
            {rowData.first_name + ' ' + rowData.last_name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.MainView}>
      <CStatusBar />
        <View style={styles.HeaderView}>
          <View style={styles.HeaderSubView}>
            <Icon
              name='ios-arrow-back'
              style={styles.HeaderBackIcon}
              onPress={() => this.props.navigation.goBack()}
            />
            <Text style={styles.HeaderTitle}>Select Recruiter</Text>
          </View>
        </View>
        <ScrollView style={styles.ScrollStyle}>
          <View>
            <TextInput
              placeholderTextColor={'#aaa'}
              placeholder="Enter Name"
              style={styles.InputStyle}
              value={this.state.name}
              autoFocus
              selectionColor={PRI_GREEN}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ name: text })}
              autoCorrect={false}
            />
          </View>
          <View style={styles.ScrollSubView}>
            <Text style={styles.RecentText}>Recent:</Text>
            <Content style={styles.ContentStyle}>
              <FlatList
                data={this.state.data}
                extraData={this.state}
                renderItem={this.renderItem}
                keyExtractor={(index) => index.toString()}
              />
            </Content>
          </View>
        </ScrollView>
      </View>
    )
  }
}