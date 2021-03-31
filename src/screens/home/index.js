import React, { Component } from "react";
import {
  Container,
  Content,
  Icon,
  Left,
  Right,
} from "native-base";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  Modal,
  Dimensions,
  Animated,
  ScrollView,
} from "react-native";
import CustomHeader from '../../components/header';
import PanelModal from '../../components/PanelModal';
import CStatusBar from '../../components/CStatusBar';
import { PRI_BLACK, PRI_WHITE, PRI_GREEN, SEC_GRAY } from '../../assets/consts';
import User from '../../assets/images/avatar_2.png';
import Funnel from '../../assets/icons/funnel.png';
import funnel_1 from '../../assets/icons/funnel_1.png';
import colors from '../../config/styles';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
  ClearView: {
    paddingLeft: width_unit * 30,
    alignSelf: 'center',
    marginRight: width_unit * 36,
  },
  ClearImage: {
    resizeMode: 'contain',
    height: height_unit * 48,
    width: width_unit * 48,
  },
  ClearText: {
    fontFamily: colors.fonts.raleway.regular,
    color: PRI_GREEN,
    fontSize: width_unit * 28,
    marginLeft: width_unit * 10,
  },
  SliderTexts: {
    fontFamily: colors.fonts.raleway.regular,
    textAlign: 'center',
    color: PRI_WHITE,
    fontSize: width_unit * 28,
    paddingHorizontal: width_unit * 10,
  },
  CSubView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  SelectedText: {
    fontFamily: colors.fonts.raleway.regular,
  },
  SelectedTextLength: {
    fontFamily: colors.fonts.raleway.bold,
    fontSize: width_unit * 32,
  },
  BottomTabView: {
    alignSelf: 'center',
    width: width_unit * 720,
    height: height_unit * 110,
    shadowOffset: { width: 10, height: 10 },
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: height_unit * 15,
    backgroundColor: '#fff',
    paddingHorizontal: width_unit * 40,
    elevation: 2,
  },
  EndView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  CheckAllIcon: {
    paddingHorizontal: width_unit * 20,
    fontSize: width_unit * 32,
  },
  OptionIcon: {
    paddingLeft: width_unit * 20,
    fontSize: width_unit * 32,
  },
  TabMainView: {
    elevation: 5,
    backgroundColor: PRI_GREEN,
    width: '100%',
    height: width_unit * 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabSubView1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    height: width_unit * 120,
  },
  TabSubView2:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    height: width_unit * 120,
    opacity: 0.5,
  },
  TabTitle: {
    color: PRI_WHITE,
    fontSize: width_unit * 28,
    fontFamily: colors.fonts.raleway.regular,
  },
  CountView: {
    backgroundColor: '#9fd459',
    width: width_unit * 56,
    height: width_unit * 56,
    borderRadius: width_unit * 28,
    justifyContent: 'center',
    marginLeft: 10,
  },
  CountText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: width_unit * 20,
    fontFamily: colors.fonts.roboto.regular,
  },
  TabSliderView: {
    backgroundColor: PRI_WHITE,
    width: width,
    height: width_unit * 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 5,
  },
  TabBottomBorder: {
    opacity: 0.3,
    position: 'absolute',
    width: '100%',
    height: 3,
    backgroundColor: '#fff',
    bottom: 0,
  },
  TabLRView: {
    width: '50%',
  },
  CmnView: {
    marginRight: width_unit * 20,
    height: height_unit * 70,
    backgroundColor: PRI_GREEN,
    justifyContent: 'center',
    borderRadius: 6,
    paddingLeft: width_unit * 10,
    paddingRight: width_unit * 10,
  },
  ContentStyle: {
    backgroundColor: '#fff',
  },
  list_item: {
    height: height_unit * 150,
    flexDirection: 'row',
    paddingVertical: height_unit * 30,
    paddingHorizontal: width_unit * 30,
    borderBottomColor: '#e8e8e9',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  list_avatar: {
    height: height_unit * 90,
    width: height_unit * 90,
    borderRadius: height_unit * 45,
    backgroundColor: SEC_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  list_avatar_text: {
    color: PRI_GREEN,
    fontSize: height_unit * 32,
    height: height_unit * 90,
    width: height_unit * 90,
    borderRadius: height_unit * 45,
    textAlign: 'center',
    lineHeight: height_unit * 90,
    fontFamily: colors.fonts.raleway.black,
  },
  funnel: {
    position: 'absolute',
    bottom: height_unit * 30,
    right: width_unit * 30,
    width: width_unit * 140,
    height: width_unit * 140,
    backgroundColor: PRI_GREEN,
    borderRadius: width_unit * 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  funnel_img: {
    height: height_unit * 64,
    resizeMode: 'contain',
  },
  avatarImgStyle: {
    height: height_unit * 90,
    width: height_unit * 90,
    borderRadius: height_unit * 45,
  },
  FMainView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height_unit * 96,
    width: height_unit * 96,
    borderRadius: height_unit * 43,
  },
  SubView1: {
    borderWidth: 2,
    height: height_unit * 80,
    width: height_unit * 80,
    borderRadius: height_unit * 40,
    borderColor: PRI_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubView2: {
    borderRadius: height_unit * 14,
    backgroundColor: '#fff',
    zIndex: 11,
    position: 'absolute',
    bottom: 1.5,
    height: height_unit * 28,
    width: width_unit * 28,
    overflow: 'hidden',
  },
  FImgStyle: {
    height: height_unit * 28,
    width: width_unit * 28,
  },
  CheckIconView: {
    opacity: 0.7,
    position: 'absolute',
    height: height_unit * 90,
    width: height_unit * 90,
    borderRadius: height_unit * 45,
    top: 0,
    left: 0,
    backgroundColor: '#575756',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  CIcon: {
    color: 'white',
    zIndex: 3,
  },
  name: {
    marginBottom: 3,
    fontSize: width_unit * 28,
    color: PRI_BLACK,
  },
  time: {
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 28,
    alignSelf: 'flex-end',
  },
  AmPmText: {
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 18,
  },
  WidthStyle: {
    width: width_unit * 580,
  },
  CommonFlexRow: {
    flexDirection: 'row',
  },
  MsgText: {
    fontFamily: colors.fonts.roboto.regular,
    flexWrap: 'wrap',
    fontSize: width_unit * 24,
    width: width_unit * 500,
    color: PRI_BLACK,
  },
  badgeView: {
    width: 19,
    height: 19,
    borderRadius: 9.5,
    backgroundColor: PRI_GREEN,
    justifyContent: 'center',
  },
  BadgeText: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#fff',
    fontSize: width_unit * 24,
    textAlign: 'center',
    width: 19,
    height: 19,
  },
});

let customTransition = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const thisSceneIndex = scene.index;
      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });
      return { transform: [{ translateX }] }
    },
  }
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel_visible: false,
      selected_data: [],
      filtered: false,
      setEle: 5,
      SetIndexValue: 1,
      data: [
        {
          first_name: 'Max',
          last_name: 'Armbruster',
          message: 'Lorem ipsum dolor sit amet, consectetur apidispi',
          badge: 3,
          time: '01:23',
          avatar: User,
          selected: false,
          featured: false,
        },
        {
          first_name: 'Lucas',
          last_name: 'Bierfreund',
          message: 'Lorem ipsum dolor sit amet, consectetur apidispi',
          badge: 0,
          time: '01:23',
          avatar: null,
          selected: false,
          featured: false,
        },
        {
          first_name: 'Jiji',
          last_name: 'Sy',
          message: 'Lorem ipsum dolor sit amet, consectetur apidispi',
          badge: 3,
          time: '01:23',
          avatar: null,
          selected: false,
          featured: true,
        },
      ],
    };
  }

  selectAvatar(id) {
    var data = this.state.data;
    var sel_data = this.state.selected_data;
    this.setState({ setEle: 0 });
    if (data[id].selected) {
      var i = this.state.selected_data.indexOf(this.state.data[id]);
      sel_data.splice(i, 1);
      this.setState({ selected_data: sel_data });
    } else {
      sel_data.push(this.state.data[id]);
      this.setState({ selected_data: sel_data });
    }
    data[id].selected = !this.state.data[id].selected;
    this.setState({ data: data });
  }

  selectAvatarAll() {
    var temp = this.state.data;
    var sel_temp = this.state.selected_data;
    if (this.state.selected_data.length == this.state.data.length) {
      temp.map(item => {
        item.selected = false;
      });
      this.setState({ data: temp, selected_data: [] });
    } else {
      temp.map(item => {
        item.selected = true;
        if (sel_temp.indexOf(item) < 0) sel_temp.push(item)
      })
      this.setState({ data: temp, selected_data: sel_temp });
    }
  }

  showPanel() {
    this.setState({ panel_visible: true });
  }

  returnFilter() {
    this.setState({ filtered: true });
  }

  renderItem = ({ item: rowData, index }) => {
    return (
      <View style={styles.list_item}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.list_avatar}
          onPress={() => this.selectAvatar(index)}
        >
          {rowData.avatar ? 
              <Image
                source={rowData.avatar}
                resizeMode='cover'
                style={styles.avatarImgStyle}
              /> 
            : rowData.featured ?
              <View style={styles.FMainView}>
                <View style={styles.SubView1}>
                  <Text style={styles.list_avatar_text}>
                    {rowData.first_name[0] + rowData.last_name[0]}
                  </Text>
                </View>
                <View style={styles.SubView2}>
                  <Image
                    source={require('../../assets/icons/star.png')}
                    style={styles.FImgStyle}
                  />
                </View>
              </View> 
            : <Text style={styles.list_avatar_text}>
                {rowData.first_name[0] + rowData.last_name[0]}
              </Text>
          }

          {rowData.selected ? (
            <View style={styles.CheckIconView}>
              <Icon name='md-checkmark' type="Ionicons" style={styles.CIcon} />
            </View>)
          : (null)}

        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.props.navigation.navigate('ChatDetail')}
        >
          <View style={styles.WidthStyle} >
            <View style={styles.CommonFlexRow}>
              <Text style={[styles.name,{ fontFamily: rowData.badge != 0 ? colors.fonts.raleway.bold : colors.fonts.raleway.regular }]}>
                {rowData.first_name + ' ' + rowData.last_name}
              </Text>
              <Right>
                <Text>
                  <Text style={[styles.time,{ color: rowData.badge ? '#86c930' : PRI_BLACK }]}>{rowData.time}</Text>
                  <Text style={[styles.AmPmText, { color: rowData.badge ? '#86c930' : PRI_BLACK }]}>{' PM'}</Text>
                </Text>
              </Right>
            </View>
            <View style={styles.CommonFlexRow}>
              <Text style={styles.MsgText} numberOfLines={1}>{rowData.message}</Text>
              {rowData.badge != 0 && 
                <Right>
                  <View style={styles.badgeView}>
                    <Text style={styles.BadgeText}>{rowData.badge}</Text>
                  </View>
                </Right>
              }
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { setEle } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <CStatusBar />
        <Modal
          transparent={true}
          animationType={"slide"}
          visible={this.state.panel_visible}
          presentationStyle='overFullScreen'
          onRequestClose={() => {
            this.setState({ panel_visible: false })
          }}>
          <PanelModal
            goAssignLabel={() => { this.setState({ panel_visible: false }); this.props.navigation.navigate('AssignLabel') }}
            goAssignRecruiter={() => { this.setState({ panel_visible: false }); this.props.navigation.navigate('AssignRecruiter') }}
          />
        </Modal>
        <CustomHeader
          boxShadow={true}
          gotoFilter={() => this.props.navigation.navigate('Filter', { returnFilter: this.returnFilter.bind(this) })}
          gotoNotification={() => this.props.navigation.navigate('Notification')}
          gotoProfile={() => this.props.navigation.navigate('Profile')}
        />
        <Container >
          {!this.state.filtered ?
            <View style={styles.TabMainView}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { this.setState({ SetIndexValue: 1 }); }}
                style={styles.TabLRView}
              >
                {/* <View style={ SetIndexValue === 1 ? styles.TabSubView1 : styles.TabSubView2 }> */}
                <View style={ styles.TabSubView1 }>
                  <Text style={styles.TabTitle}>Show All</Text>
                  <View style={styles.CountView}>
                    <Text style={styles.CountText}>{10}</Text>
                  </View>
                  {/* { SetIndexValue === 1 ? <View style={styles.TabBottomBorder} /> : null} */}
                </View>
              </TouchableOpacity>

              {/* <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { this.setState({ SetIndexValue: 2 }); }}
                style={styles.TabLRView}
              >
                <View style={ SetIndexValue === 2 ? styles.TabSubView1 : styles.TabSubView2 }>
                  <Text style={styles.TabTitle}>Messages</Text>
                  <View style={styles.CountView}>
                    <Text style={styles.CountText}>{99}</Text>
                  </View>
                  { SetIndexValue === 2 ? <View style={styles.TabBottomBorder} /> : null}
                </View>
              </TouchableOpacity> */}
            </View> :

            <View style={styles.TabSliderView} horizontal={true}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => { this.setState({ filtered: false }) }}
                  style={styles.ClearView}
                >
                  <View style={styles.CSubView}>
                    <Image source={funnel_1} style={styles.ClearImage} />
                    <Text style={styles.ClearText}>Clear</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.props.navigation.navigate('Filter', { returnFilter: this.returnFilter.bind(this) })}
                >
                  <View style={styles.CmnView}><Text style={styles.SliderTexts}>Completed</Text></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.props.navigation.navigate('Filter', { returnFilter: this.returnFilter.bind(this) })}
                >
                  <View style={styles.CmnView}><Text style={styles.SliderTexts}>Manila</Text></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.props.navigation.navigate('Filter', { returnFilter: this.returnFilter.bind(this) })}
                >
                  <View style={styles.CmnView}><Text style={styles.SliderTexts}>Facebook</Text></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.props.navigation.navigate('Filter', { returnFilter: this.returnFilter.bind(this) })}
                >
                  <View style={styles.CmnView}><Text style={styles.SliderTexts}>Recruiter</Text></View>
                </TouchableOpacity>

              </ScrollView>
            </View>
          }
            <Content style={styles.ContentStyle}>
              <FlatList
                data={this.state.data}
                extraData={this.state}
                renderItem={this.renderItem}
                keyExtractor={(index) => index.toString()}
              />
            </Content>
        </Container>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.funnel, { elevation: setEle }]}
          onPress={() => this.props.navigation.navigate('Filter', { returnFilter: this.returnFilter.bind(this) })}
        >
          <Image source={Funnel} style={styles.funnel_img} />
        </TouchableOpacity>

        {this.state.selected_data.length != 0 ? (
          <View style={styles.BottomTabView}>
            <Left>
              <Text>
                <Text style={styles.SelectedTextLength}>{this.state.selected_data.length}</Text>
                <Text style={styles.SelectedText}>{'  Selected'}</Text>
              </Text>
            </Left>
            <Right style={styles.EndView}>
              <Icon
                name='check-all'
                type='MaterialCommunityIcons'
                style={styles.CheckAllIcon}
                onPress={() => this.selectAvatarAll()}
              />
              <Icon
                name='options-vertical'
                type='SimpleLineIcons'
                style={styles.OptionIcon}
                onPress={() => this.showPanel()}
              />
            </Right>
          </View>)
        : (null)}
      </View>

    )
  }
}

export default Home;