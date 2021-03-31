import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Alert,
} from 'react-native';
import { Icon } from 'native-base';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PRI_BLACK, PRI_WHITE, PRI_GREEN, SEC_GRAY } from '../../assets/consts';
import colors from '../../config/styles';
import reject_1 from '../../assets/icons/reject_1.png';
import put_on_hold_1 from '../../assets/icons/put_on_hold_1.png';
import shotlist_1 from '../../assets/icons/shotlist_1.png';
import hire_1 from '../../assets/icons/hire_1.png';
import Video from '../../libs/react-native-video';
import EIcon from 'react-native-vector-icons/Entypo';
import IoIcon from 'react-native-vector-icons/Ionicons';
import CStatusBar from '../../components/CStatusBar';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  posterStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  AddTagsView: {
    opacity: 0.8,
    backgroundColor: '#eee',
    width: width,
    marginTop: height_unit * 10,
    height: height_unit * 120,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 85,
  },
  AddTagsText: {
    fontFamily: colors.fonts.roboto.regular,
    paddingHorizontal: width_unit * 28,
    color: PRI_GREEN,
    fontSize: width_unit * 28,
  },
  AnswerView2: {
    paddingHorizontal: width_unit * 36,
    flexDirection: 'row',
  },
  AddCommentView: {
    opacity: 0.8,
    backgroundColor: '#eee',
    width: width,
    marginTop: height_unit * 70,
    height: height_unit * 120,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  AddCommentText: {
    fontFamily: colors.fonts.roboto.regular,
    paddingHorizontal: width_unit * 28,
    color: PRI_GREEN,
    fontSize: width_unit * 28,
  },
  RightArrows: {
    color: PRI_GREEN,
    fontSize: width_unit * 40,
    marginRight: 15,
  },
  AddRecruiterText: {
    fontFamily: colors.fonts.roboto.regular,
    paddingHorizontal: width_unit * 28,
    color: PRI_GREEN,
    fontSize: width_unit * 28,
  },
  AddRecSubView: {
    paddingHorizontal: width_unit * 36,
    marginBottom: height_unit * 20,
  },
  LabelSText: {
    color: PRI_GREEN,
    fontSize: width_unit * 28,
  },
  LabelsView: {
    marginLeft: width_unit * -25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: width_unit * 20,
  },
  ARecText: {
    marginTop: height_unit * 20,
    fontFamily: colors.fonts.roboto.regular,
    color: PRI_GREEN,
    fontSize: width_unit * 28,
  },
  AddRSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width_unit * 20,
  },
  AddFLNameView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width_unit * 90,
    height: width_unit * 90,
    borderRadius: width_unit * 45,
    backgroundColor: SEC_GRAY,
    marginRight: width_unit * 30,
    marginLeft: width_unit * -25,
  },
  AFLName: {
    textAlign: 'center',
    fontFamily: colors.fonts.raleway.black,
    color: PRI_GREEN,
    fontSize: width_unit * 32,
  },
  PlusIconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width_unit * 90,
    height: width_unit * 90,
    borderRadius: width_unit * 45,
    backgroundColor: SEC_GRAY,
  },
  PlusIcon: {
    color: PRI_GREEN,
    fontSize: width_unit * 40,
  },
  OtherPlusIconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width_unit * 60,
    height: width_unit * 60,
    borderRadius: width_unit * 60,
    backgroundColor: SEC_GRAY,
  },
  AnimatedView: {
    width: width,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  AnimatedSubView: {
    opacity: 0.8,
    backgroundColor: '#eee',
    width: width,
    marginTop: height_unit * 10,
    height: height_unit * 120,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  QUser2View: {
    paddingHorizontal: width_unit * 36,
    flexDirection: 'row',
    marginTop: height_unit * 50,
    marginBottom: height_unit * 30, 
  },
  AboutMainView: {
    paddingHorizontal: width_unit * 36,
    marginTop: height_unit * 30,
  },
  IDText: {
    fontFamily: colors.fonts.roboto.regular,
    color: '#575756',
    marginBottom: 3,
    fontSize: width_unit * 24,
    lineHeight: height_unit * 44,
    width: width_unit * 150,
    marginBottom: 5,
  },
  ItemIdText: {
    fontFamily: colors.fonts.roboto.regular,
    color: '#575756',
    fontSize: width_unit * 24,
    lineHeight: height_unit * 44,
  },
  TitleStyle: {
    fontFamily: colors.fonts.roboto.regular,
    color: PRI_GREEN,
    fontSize: width_unit * 24,
    marginBottom: height_unit * 30,
  },
  CommentText: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#a2a2a2',
    fontSize: height_unit * 28,
    lineHeight: height_unit * 44,
  },
  CUName: {
    fontFamily: colors.fonts.raleway.italic,
    fontSize: width_unit * 28,
    color: '#a2a2a2',
  },
  CUserName: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: height_unit * 25,
  },
  RSubView: {
    paddingHorizontal: width_unit * 36,
    flexDirection: 'row',
    marginBottom: height_unit * 30,
  },
  QUserName: {
    fontFamily: colors.fonts.raleway.bold,
    color: PRI_GREEN,
    fontSize: height_unit * 26,
    lineHeight: height_unit * 40,
  },
  QUserMsg: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#a2a2a2',
    fontSize: height_unit * 26,
    lineHeight: height_unit * 40,
    width: width_unit * 625,
  },
  PlayBtnView: {
    zIndex: 10,
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  PlayBtnSubView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#eee',
    opacity: 0.8,
  },
  PlayIcon: {
    color: '#87c930',
    fontSize: 50,
    marginLeft: 7,
  },
  RecordingView: {
    marginTop: height_unit * 50,
  },
  MobileEmailText: {
    fontFamily: colors.fonts.roboto.regular,
    color: '#575756',
    opacity: 0.5,
    fontSize: width_unit * 24,
    lineHeight: height_unit * 44,
    marginBottom: 5,
  },
  EmailSubView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  EmailIdText: {
    fontFamily: colors.fonts.roboto.regular,
    color: '#575756',
    fontSize: width_unit * 24,
    lineHeight: height_unit * 44,
  },
  MobileView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  MobileNo: {
    fontFamily: colors.fonts.roboto.regular,
    color: '#575756',
    fontSize: width_unit * 24,
    lineHeight: height_unit * 44,
    marginBottom: 5,
  },
  MIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ChatIcon: {
    color: PRI_GREEN,
    fontSize: height_unit * 50,
    marginRight: width_unit * 50,
  },
  OtherIcons: {
    color: PRI_GREEN,
    fontSize: height_unit * 50,
  },
  CmnRow: {
    flexDirection: 'row',
  },
  OtherDetailTexts: {
    fontFamily: colors.fonts.roboto.regular,
    color: '#575756',
    opacity: 0.5,
    color: PRI_BLACK,
    fontSize: width_unit * 24,
    lineHeight: height_unit * 44,
    width: width_unit * 150,
    marginBottom: 5,
  },
  OtherItem: {
    color: PRI_BLACK,
    fontSize: width_unit * 24,
    lineHeight: height_unit * 44,
  },
  CampaignText: {
    color: PRI_BLACK,
    fontSize: width_unit * 24,
    lineHeight: height_unit * 44,
    width: width_unit * 150,
  },
  CamName: {
    color: PRI_BLACK,
    fontSize: width_unit * 24,
    lineHeight: height_unit * 44,
  },
  CmnViewStyle: {
    paddingHorizontal: width_unit * 36,
    marginTop: height_unit * 50,
  },
  ProfileView: {
    zIndex: 10,
    width: width,
    height: height_unit * 444,
    backgroundColor: PRI_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  ProfileText: {
    fontFamily: colors.fonts.raleway.bold,
    fontSize: width_unit * 150,
    color: '#fff',
    textAlign: 'center',
    marginBottom: height_unit * 60,
  },
  UserName: {
    fontFamily: colors.fonts.raleway.bold,
    fontSize: width_unit * 38,
    position: 'absolute',
    left: width_unit * 36,
    bottom: height_unit * 30,
    color: PRI_WHITE,
  },
  StarIconView: {
    position: 'absolute',
    width: width_unit * 80,
    height: width_unit * 80,
    borderRadius: width_unit * 80,
    backgroundColor: '#9c9c9b',
    justifyContent: 'center',
    alignItems: 'center',
    top: height_unit * 404,
    right: width_unit * 140,
    elevation: 3,
    zIndex: 11,
  },
  AbsoluteIcons: {
    color: PRI_WHITE,
    fontSize: width_unit * 40,
  },
  ShareIconView: {
    position: 'absolute',
    width: width_unit * 80,
    height: width_unit * 80,
    borderRadius: width_unit * 80,
    backgroundColor: '#9c9c9b',
    justifyContent: 'center',
    alignItems: 'center',
    top: height_unit * 404,
    right: width_unit * 30,
    elevation: 3,
    zIndex: 11,
  },
  ScrollViewStyle: {
    flexGrow: 1,
    backgroundColor: PRI_WHITE,
    paddingBottom: width_unit * 30,
  },
  HeaderView: {
    backgroundColor: PRI_GREEN,
    height: height_unit * 120,
    width: width,
    paddingHorizontal: width_unit * 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeadSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex:1,
  },
  HeadIcons: {
    color: PRI_WHITE,
  },
  TextView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: width_unit * 60,
    backgroundColor: SEC_GRAY,
    marginRight: width_unit * 30,
    borderRadius: 5,
  },
  LabelTexts: {
    color: PRI_GREEN,
    fontSize: width_unit * 26,
    // paddingHorizontal: width_unit * 10,
    paddingLeft: width_unit * 12,
    paddingRight: width_unit * 12,
    fontFamily: colors.fonts.roboto.regular,
  },
  TabSubView: {
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: PRI_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FirstIcons: {
    height: height_unit * 56,
    resizeMode: 'contain',
  },
  TabIconViews: {
    width: '25%',
    height: width_unit * 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRI_GREEN,
  },
  IconText: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#fff',
    fontSize: width_unit * 25,
    marginTop: 4,
  },
  OtherIconView: {
    elevation: 5,
    marginBottom: height_unit * 30,
    marginLeft: width_unit * 40,
    width: width_unit * 100,
    height: width_unit * 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width_unit * 50,
    backgroundColor: PRI_GREEN,
  },
  AnimatedTab1View: {
    position: 'absolute',
    right: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SecondIcons: {
    height: height_unit * 55,
    resizeMode: 'contain',
  },
  RejectView: {
    elevation: 5,
    marginBottom: height_unit * 30,
    width: width_unit * 100,
    height: width_unit * 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width_unit * 50,
    backgroundColor: PRI_GREEN,
  },
  videoPlayer:{
    width:'100%',
    // backgroundColor:'#000',
    height:200,
  },
  AnswerView: {
    backgroundColor: '#f4f4f4',
    width: width,
  },
  AnswerSubView: {
    marginTop: height_unit * 50,
    paddingHorizontal: width_unit * 40,
  },
  AUser: {
    fontFamily: colors.fonts.raleway.bold,
    color: PRI_GREEN,
    fontSize: height_unit * 26,
    lineHeight: height_unit * 40,
    fontStyle: 'italic',
  },
  AUserMsg: {
    fontFamily: colors.fonts.roboto.italic,
    color: PRI_BLACK,
    fontSize: height_unit * 28,
    lineHeight: height_unit * 44,
    width: width_unit * 675,
  },
  HideBtnView: {
    backgroundColor: '#f4f4f4',
    alignSelf: 'flex-end',
    marginTop: height_unit * 50,
    marginBottom: height_unit * 40,
    flexDirection: 'row',
    marginRight: 15,
  },
  HideBtnText: {
    fontFamily: colors.fonts.raleway.regular,
    color: PRI_GREEN,
    fontSize: width_unit * 24,
  },
  HideBtnIcon: {
    color: PRI_GREEN,
    fontSize: width_unit * 36,
    paddingLeft: width_unit * 20,
  },
});

export default class CandidateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      floatedOpacity: new Animated.Value(1),
      tabBarOpacity: new Animated.Value(0),
      floatedBottom: new Animated.Value(0),
      scrollHeight: 0,
      AnimatedHeight: new Animated.Value(height_unit * 120),
      count: 0,
      rate: 1,
      volume: 1,
      RemoveCLabel: false,
      RemoveLLabel: false,
      RemoveRLabel: false,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: true,
      setViewPlayOpacity: 1,
      cRight: '49%',
      rRight: '17%',
      lRight: '78%',
      BackImgUrl: 'https://d3m3tdr3wo3gly.cloudfront.net/wp-content/uploads/2016/01/25065337/188ysybz7a5n6jpg-1.jpg',
    }
  }

  // setView(no) {
  //   if( no === 0 ) {
  //     this.setState({ count : 1 },() => {
  //       Animated.timing(          
  //         this.state.AnimatedHeight,            
  //         {
  //             toValue: height_unit * 512,                
  //             duration: 400,
  //         }
  //       ).start((e) => {
  //         if(e.finished && this.aScrollView && this.rOffset) {
  //           // this.aScrollView.scrollTo({y: this.rOffset - (height_unit * 512), x: 0, animated: true});
  //           this.aScrollView.scrollToEnd({ animated: true });
  //         }
  //       });
  //     });
  //   } else {
  //     this.setState({ count : 0 },() => {
  //       Animated.timing(          
  //         this.state.AnimatedHeight,            
  //         {
  //             toValue: height_unit * 120,                
  //             duration: 400,             
  //         }
  //       ).start();
  //     });
  //   }
  // }

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
    this.setState({
      paused: true,
      setViewPlayOpacity: 1,
      BackImgUrl: 'https://d3m3tdr3wo3gly.cloudfront.net/wp-content/uploads/2016/01/25065337/188ysybz7a5n6jpg-1.jpg',
    });
  };

  renderHeaderView () {
    return(
      <View style={styles.HeaderView}>
        <View style={styles.HeadSubView}>
          <Icon
            name='ios-arrow-back'
            style={styles.HeadIcons}
            onPress={() => this.props.navigation.goBack()}
          />
          <Icon
            name='more-horizontal'
            type='Feather'
            style={styles.HeadIcons}
            onPress={() => { this.props.navigation.navigate('EditProfile') }}
          />
        </View>
      </View>
    );
  }

  alert(message, heading, onOk, onCancel) {
    const buttons = [
      {
        text: 'OK',
        onPress: onOk,
      },
    ];
    if (onCancel) {
      buttons.push({
        text: 'Cancel',
        onPress: onCancel,
      });
    }
    Alert.alert(
      heading ? heading : 'Warning',
      message,
      buttons,
      { cancelable: false },
    );
  }

  RemoveLabel(str) {
    const { cRight, rRight, lRight  } = this.state;
    if(str === 'c'){
      this.alert('Are You Sure you want to Remove Label.?', 'Warning', () => {
        if(lRight === '17%' || lRight === '78%'){
          this.setState({ RemoveCLabel: true, rRight: '47%' });
        } else {
          this.setState({ RemoveCLabel: true });
        }
      }, () => { this.setState({ RemoveCLabel: false }); });
    } else if(str === 'l') {
      this.alert('Are You Sure you want to Remove Label.?', 'Warning', () => {
        if(rRight === '17%' && cRight === '49%'){
          this.setState({ RemoveLLabel: true, cRight: '76%', rRight: '45%' });
        } else if(rRight === '47%') {
          this.setState({ RemoveLLabel: true, rRight: '74%' });
        } else {
          this.setState({ RemoveLLabel: true })
        }
      }, () => { this.setState({ RemoveLLabel: false }); });
    } else if(str === 'r') {
      this.alert('Are You Sure you want to Remove Label.?', 'Warning', () => {
        this.setState({ RemoveRLabel: true });
      }, () => { this.setState({ RemoveRLabel: false }); });
    }
  }

  render() {
    const { scrollHeight, setViewPlayOpacity } = this.state;
    const tabBarOpacity = this.state.scrollY.interpolate({
      inputRange: [scrollHeight - 200, scrollHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    const floatedOpacity = this.state.scrollY.interpolate({
      inputRange: [scrollHeight - 200, scrollHeight],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    
    const floatedBottom = this.state.scrollY.interpolate({
      inputRange: [scrollHeight - 200, scrollHeight],
      outputRange: [0, -30],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.MainView}>
        <CStatusBar />
        {this.renderHeaderView()}
        <Animated.ScrollView 
          contentContainerStyle={styles.ScrollViewStyle}
          scrollEventThrottle={1}
          bounces={false}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}
          ref={(o) => { 
            if(o && o.getNode) {
              this.aScrollView = o.getNode();
            }
          }}
          onContentSizeChange={(e, height) => {
            const screenHeight = Dimensions.get('window').height;
            this.setState({
              scrollHeight: height - screenHeight
            });
          }}
        >
          <View style={styles.StarIconView}>
            <Icon
              style={styles.AbsoluteIcons}
              name='star'
              type='SimpleLineIcons'
              // onPress={() => { }}
            />
          </View>
          <View style={styles.ShareIconView}>
            <Icon
              style={styles.AbsoluteIcons}
              name='share'
              type='SimpleLineIcons'
              onPress={() => this.props.navigation.navigate('ShareProfile')}
            />
          </View>

          <View style={styles.ProfileView}>
            <Text style={styles.ProfileText}>MA</Text>
            <Text style={styles.UserName}>Max Ambruster</Text>
          </View>

          <View>

            <View style={styles.AboutMainView}>
              <Text style={styles.TitleStyle}>About</Text>
              <View style={styles.CmnRow}>
                <Text style={styles.IDText}>ID:</Text>
                <Text style={styles.ItemIdText}>123456</Text>
              </View>
              <View style={styles.CmnRow}>
                <Text style={styles.CampaignText}>Campaign:</Text>
                <Text style={styles.CamName}>TalkPush Account Manager PH</Text>
              </View>
            </View>

            <View style={styles.CmnViewStyle}>
              <Text style={styles.TitleStyle}>Contact Detail</Text>
              <View>
                <Text style={styles.MobileEmailText}>Mobile</Text>
                <View style={styles.MobileView}>
                  <Text style={styles.MobileNo}>0909 123 4567</Text>
                  <View style={styles.MIconView}>
                    <MIcon name='message-text-outline' style={styles.ChatIcon} />
                    <Icon type='SimpleLineIcons' name='phone' style={styles.OtherIcons} />
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.MobileEmailText}>Email</Text>
                <View style={styles.EmailSubView}>
                  <Text style={styles.EmailIdText}>max.ambruster@talkpush.com</Text>
                  <MIcon name='email-outline' style={styles.OtherIcons} />
                </View>
              </View>
            </View>

            <View style={styles.CmnViewStyle}>
              <Text style={styles.TitleStyle}>Other Details</Text>
              <View style={styles.CmnRow}>
                <Text style={styles.OtherDetailTexts}>Location:</Text>
                <Text style={styles.OtherItem}></Text>
              </View>
              <View style={styles.CmnRow}>
                <Text style={styles.OtherDetailTexts}>Education:</Text>
                <Text style={styles.OtherItem}></Text>
              </View>
              <View style={styles.CmnRow}>
                <Text style={styles.OtherDetailTexts}>Source:</Text>
                <Text style={styles.OtherItem}></Text>
              </View>
              <View style={styles.CmnRow}>
                <Text style={styles.OtherDetailTexts}>Date:</Text>
                <Text style={styles.OtherItem}></Text>
              </View>
            </View>

            <View style={styles.RecordingView}>
              <Text style={[styles.TitleStyle, {paddingHorizontal: width_unit * 36}]}>Recordings:</Text>
              <View style={styles.RSubView}>
                <Text>
                  <Text style={styles.QUserName}>JS: </Text>
                  <Text style={styles.QUserMsg}>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et?</Text>
                </Text>
              </View>

                {/* Video */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.setState({ paused: !this.state.paused, BackImgUrl: '', setViewPlayOpacity: 0 })}
                >
                  <View style={[styles.PlayBtnView, { opacity: setViewPlayOpacity }]}>
                      <View style={styles.PlayBtnSubView}>
                        <EIcon name="controller-play" style={styles.PlayIcon}/>
                      </View>
                  </View>

                  <Video
                    source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}   
                    ref={(ref) => {this.player = ref}}
                    poster={this.state.BackImgUrl}
                    posterStyle={styles.posterStyle}   
                    muted={false}                                         
                    resizeMode="cover"                  
                    repeat={true}
                    // onLoadStart={this.loadStart}      
                    // onLoad={this.setDuration}     
                    // onProgress={this.setTime}
                    onEnd={this.onEnd}
                    // onBuffer={this.onBuffer}
                    // onTimedMetadata={this.onTimedMetadata}
                    style={styles.videoPlayer}
                    paused={this.state.paused}
                  />

                  {/* <View style={{ paddingHorizontal: width_unit * 36, backgroundColor: '#000', justifyContent: 'center', opacity: 0.5, position: 'absolute', bottom: 0, left: 0, right: 0, height: height_unit * 50 }}>
                      <EIcon name="controller-play" style={{ color: '#fff', fontSize: width_unit * 20 }} />
                  </View> */}

                </TouchableOpacity> 

              <View style={styles.AnswerView}>

                <View style={styles.AnswerSubView}>
                  <Text>
                    <Text style={styles.AUser}>MA: </Text>
                    <Text style={styles.AUserMsg}>
                      {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolare eu fugiat nulla pariatur'}
                    </Text>
                  </Text>
                </View>

                <View style={styles.HideBtnView}>
                  <Text style={styles.HideBtnText}>Hide Transcript </Text>
                  <Icon name='ios-arrow-up' style={styles.HideBtnIcon} />
                </View>

              </View>

              <View style={styles.QUser2View}>
                <Text>
                  <Text style={styles.QUserName}>JS: </Text>
                  <Text style={styles.QUserMsg}>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et?</Text>
                </Text>
              </View>

              <View style={styles.AnswerView2}>
                <Text>
                  <Text style={styles.AUser}>MA: </Text>
                  <Text style={styles.AUserMsg}>
                    {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolare eu fugiat nulla pariatur'}
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.CmnViewStyle}>
              <Text style={styles.TitleStyle}>Comments:</Text>
              <Text style={styles.CommentText}>
                {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolare eu fugiat nulla pariatur'}
              </Text>
              <View style={styles.CUserName}>
                <Text style={styles.CUName}>by </Text>
                <Text style={[styles.CUName, { color: PRI_GREEN }]}>Jiji Sy </Text>
                <Text style={styles.CUName}>at 01:23 pm March 21, 2018</Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate('comment')}
              style={styles.AddCommentView}
            >
              <Text style={styles.AddCommentText}>Add Comments</Text>
              <Icon name='ios-arrow-forward' style={styles.RightArrows} />
            </TouchableOpacity>

            {/* <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => { this.setView(count); }}
            >
              <Animated.View style={[styles.AnimatedView, { height: AnimatedHeight }]}>
                <View
                  ref={(o) => {this.recruiterView = o; }}
                  style={styles.AnimatedSubView}
                  onLayout={(e) => {
                    if(this.recruiterView) {
                      this.recruiterView.measure(
                        (x,
                        y,
                        width,
                        height,
                        pageX,
                        pageY) => {
                          this.rOffset = pageY;
                        });
                    }
                  }}
                >
                  <Text style={styles.AddRecruiterText}>Add Recruiter</Text>
                  <Icon name='ios-arrow-forward' style={styles.RightArrows} />
                </View>

                <View>

                  <View style={styles.AddRecSubView}>
                    <Text style={styles.ARecText}>Assigned Recruiter(s):</Text>
                    <View style={styles.AddRSubView}>
                      <View style={styles.AddFLNameView}>
                        <Text style={styles.AFLName}>LB</Text>
                      </View>
                      <View style={styles.PlusIconView}>
                        <Icon
                          name='plus'
                          type='MaterialCommunityIcons'
                          style={styles.PlusIcon}
                          onPress={() => this.props.navigation.navigate('AssignRecruiter')}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={styles.AddRecSubView}>
                    <Text style={styles.LabelSText}>Label(s):</Text>
                    <View style={styles.LabelsView}>
                      <View style={styles.TextView}>
                        <Text style={styles.LabelTexts}>October 24</Text>
                      </View>
                      <View style={styles.TextView}>
                        <Text style={styles.LabelTexts}>Partial>50%</Text>
                      </View>
                      <View style={styles.TextView}>
                        <Text style={styles.LabelTexts}>Offer refused</Text>
                      </View>
                      <View style={styles.OtherPlusIconView}>
                        <Icon
                          name='plus'
                          type='MaterialCommunityIcons'
                          style={styles.PlusIcon}
                          onPress={() => this.props.navigation.navigate('AssignLabel')}
                        />
                      </View>
                    </View>
                  </View>
                </View>

              </Animated.View>

            </TouchableOpacity> */}


            <View style={{ marginBottom: 85 }}>
              <View style={styles.AddRecSubView}>
                <Text style={styles.ARecText}>Assigned Recruiter(s):</Text>
                <View style={styles.AddRSubView}>
                  <View style={styles.AddFLNameView}>
                    <Text style={styles.AFLName}>LB</Text>
                  </View>
                  <View style={styles.PlusIconView}>
                    <Icon
                      name='plus'
                      type='MaterialCommunityIcons'
                      style={styles.PlusIcon}
                      onPress={() => this.props.navigation.navigate('AssignRecruiter')}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.AddRecSubView}>
                <Text style={styles.LabelSText}>Label(s):</Text>
                <View style={styles.LabelsView}>

                  {!this.state.RemoveLLabel ?
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => { this.RemoveLabel('l'); }}
                      style={{ zIndex: 10, position: 'absolute', top: 0, right: this.state.lRight, width: 18, height: 18, borderRadius: 18, backgroundColor: '#b3b3b3', alignItems: 'center', justifyContent: 'center' }}>
                      <IoIcon name="ios-close-outline" style={{ color: '#a81515', fontSize: 18 }} />
                    </TouchableOpacity>
                  : null }

                  {!this.state.RemoveLLabel ?
                    <View style={styles.TextView}>
                      <Text style={styles.LabelTexts}>October 24</Text>
                    </View>
                  : null }

                  {!this.state.RemoveCLabel ?
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => { this.RemoveLabel('c'); }}
                      style={{ zIndex: 10, position: 'absolute', top: 0, right: this.state.cRight, width: 18, height: 18, borderRadius: 18, backgroundColor: '#b3b3b3', alignItems: 'center', justifyContent: 'center' }}>
                      <IoIcon name="ios-close-outline" style={{ color: '#a81515', fontSize: 18 }} />
                    </TouchableOpacity>
                  : null }

                  {!this.state.RemoveCLabel ?
                    <View style={styles.TextView}>
                      <Text style={styles.LabelTexts}>Partial>50%</Text>
                    </View>
                  : null }

                  {!this.state.RemoveRLabel ?
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => { this.RemoveLabel('r'); }}
                      style={{ zIndex: 10, position: 'absolute', top: 0, right: this.state.rRight, width: 18, height: 18, borderRadius: 18, backgroundColor: '#b3b3b3', alignItems: 'center', justifyContent: 'center' }}>
                      <IoIcon name="ios-close-outline" style={{ color: '#a81515', fontSize: 18 }} />
                    </TouchableOpacity>
                  : null }

                  {!this.state.RemoveRLabel ?
                    <View style={styles.TextView}>
                      <Text style={styles.LabelTexts}>Offer refused</Text>
                    </View>
                  : null }

                  <View style={styles.OtherPlusIconView}>
                    <Icon
                      name='plus'
                      type='MaterialCommunityIcons'
                      style={styles.PlusIcon}
                      onPress={() => this.props.navigation.navigate('AssignLabel')}
                    />
                  </View>

                </View>
              </View>
            </View>

            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddTag')}
              activeOpacity={0.8}
              style={styles.AddTagsView}
            >
              <Text style={styles.AddTagsText}>Add Tags</Text>
              <Icon name='ios-arrow-forward' style={styles.RightArrows} />
            </TouchableOpacity> */}
          </View>

        </Animated.ScrollView>
        
        <Animated.View style={[styles.AnimatedTab1View, { bottom: floatedBottom, opacity: floatedOpacity }]}>
          <View style={styles.RejectView}>
            <Image source={reject_1} style={styles.FirstIcons} />
          </View>

          <View style={styles.OtherIconView}>
            <Image source={put_on_hold_1} style={styles.FirstIcons} />
          </View>

          <View style={styles.OtherIconView}>
            <Image source={shotlist_1} style={styles.SecondIcons} />
          </View>

          <View style={styles.OtherIconView}>
            <Image source={hire_1} style={styles.SecondIcons} />
          </View>
        </Animated.View>

        <Animated.View style={[styles.AnimatedTab1View, { opacity: tabBarOpacity, bottom: 0 }]}>
          <View style={styles.TabSubView}>
            <View style={styles.TabIconViews}>
              <Image source={reject_1} style={styles.FirstIcons} />
              <Text style={styles.IconText}>Reject</Text>
            </View>

            <View style={styles.TabIconViews}>
              <Image source={put_on_hold_1} style={styles.FirstIcons} />
              <Text style={styles.IconText}>On Hold</Text>
            </View>

            <View style={styles.TabIconViews}>
              <Image source={shotlist_1} style={styles.SecondIcons} />
              <Text style={styles.IconText}>Shortlist</Text>
            </View>

            <View style={styles.TabIconViews}>
              <Image source={hire_1} style={styles.SecondIcons} />
              <Text style={styles.IconText}>Hire</Text>
            </View>
          </View>
        </Animated.View>

      </View>
    )
  }
}