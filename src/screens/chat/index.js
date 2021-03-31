import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  Animated,
  PanResponder,
} from "react-native";
import moment from 'moment';
import { Container, Icon } from 'native-base';
import { GiftedChat, Bubble } from '../../libs/react-native-gifted-chat';
import { PRI_WHITE, PRI_BLACK, PRI_GREEN, SEC_GRAY, SEC_DGRAY } from "../../assets/consts";
import _ from 'lodash';
import colors from '../../config/styles';
import CStatusBar from "../../components/CStatusBar";
import wave from '../../assets/images/wave.png';
// import io from 'react-native-socket.io-client'
// import SendButton from './components/sendbutton'
// import InputText from './components/input'
// import jwtDecode from 'jwt-decode'
// import styles from './style'
const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;
const minSuggestionHeight = height_unit * 40;
const maxSuggestionHeight = parseInt(height_unit * 660, 10);

const styles = StyleSheet.create({
  RenderMainView: {
    flex: 1,
  },
  VoiceCallIcon: {
    color: PRI_WHITE,
    paddingRight: width_unit * 20,
  },
  OIcons: {
    color: PRI_WHITE,
  },
  IconsAlignView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UNameSty: {
    fontFamily: colors.fonts.raleway.regular,
    color: '#fff',
    fontSize: width_unit * 34,
    paddingLeft: width_unit * 20,
  },
  MaTextView: {
    height: height_unit * 90,
    width: height_unit * 90,
    backgroundColor: SEC_GRAY,
    borderRadius: height_unit * 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width_unit * 20,
  },
  MaTextSty: {
    color: PRI_GREEN,
    fontSize: height_unit * 32,
    height: height_unit * 90,
    width: height_unit * 90,
    borderRadius: height_unit * 45,
    textAlign: 'center',
    lineHeight: height_unit * 90,
    fontFamily: colors.fonts.raleway.black,
  },
  ContainerSty: {
    backgroundColor: PRI_WHITE,
  },
  BackIconSty: {
    color: '#fff',
  },
  CAlignmentView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conSubView: {
    elevation: 8,
    backgroundColor: PRI_GREEN,
    height: height_unit * 136,
    width: width,
    paddingHorizontal: width_unit * 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  panHandlersView: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: (height_unit * 50),
    borderBottomColor: SEC_DGRAY,
    borderBottomWidth: (height_unit * 1),
  },
  CurrentDate: {
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 24,
    alignSelf: 'center',
    color: '#a2a2a2',
  },
  CurrentText: {
    fontFamily: colors.fonts.roboto.regular,
    color: PRI_GREEN,
    fontSize: width_unit * 24,
  },
  PlayArrowStyle: {
    fontSize: width_unit * 48,
    color: PRI_GREEN,
  },
  VideoMainView: {
    height: height_unit * 360,
    width: '80%',
    overflow: 'hidden',
    borderColor: '#eaeaea',
    borderWidth: width_unit * 2,
  },
  VideoImage: {
    height: height_unit * 360,
    width: '100%',
  },
  VideoAbsoluteView: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlayIcon: {
    fontSize: width_unit * 48,
    color: PRI_GREEN,
  },
  TouchableBtnView: {
    width: '50%',
    height: (height_unit * 110),
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: height_unit * 1,
    borderBottomColor: SEC_DGRAY,
    borderRightColor: SEC_DGRAY,
  },
  TBtnTitle: {
    fontFamily: colors.fonts.raleway.regular,
    fontSize: height_unit * 26,
    lineHeight: height_unit * 30,
    paddingHorizontal: height_unit * 30,
  },
  CmnAlignment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  CmnViewStyle: {
    width: 40,
    height: (height_unit * 4),
    backgroundColor: '#BBB',
  },
  InputStyle: {
    flex: 1,
    height: height_unit * 80,
    borderRadius: 30,
    borderColor:SEC_GRAY,
    borderWidth: 1,
    paddingLeft: 16,
    fontFamily: colors.fonts.raleway.regular,
    marginHorizontal: width_unit * 20,
    backgroundColor: '#fafafa',
    textAlign: 'left',
  },
  MicroPhoneIconView: {
    width: height_unit * 80,
    height: height_unit * 80,
    backgroundColor: '#0004',
    borderRadius: height_unit * 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SendIconView: {
    width: height_unit * 80,
    height: height_unit * 80, 
    backgroundColor: PRI_GREEN,
    borderRadius: height_unit * 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SIcon: {
    fontSize: 20,
    marginLeft: -3,
    color: PRI_WHITE,
  },
  MIcon: {
    fontSize: 20,
    color: PRI_WHITE,
  },
  chatDetailContainer: {
    elevation: 5,
    backgroundColor: '#fafafa',
    width: width,
    justifyContent: 'space-between',
  },
  chatDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: width_unit * 15,
    marginLeft: 10,
  },
  chatDetailLabel: {
    fontFamily: colors.fonts.roboto.regular,
    color: PRI_BLACK,
    opacity: 0.5,
    fontSize: width_unit * 24,
  },
  chatDetailTxt: {
    fontFamily: colors.fonts.raleway.regular,
    color: PRI_GREEN,
    fontSize: width_unit * 28,
    marginTop: 3,
  },
  chatDetailHideTxt: {
    fontFamily: colors.fonts.roboto.regular,
    color: PRI_GREEN,
    fontSize: width_unit * 24
  },
  notificationContainer: {
    backgroundColor: '#a54242',
    height: height_unit * 80,
    width: width,
    justifyContent: 'center',
    position: 'absolute',
    top: height_unit * 136,
    zIndex: 1,
  },
  notificationErrorTxt: {
    fontFamily: colors.fonts.roboto.regular,
    color: '#fff',
    fontSize: width_unit * 28,
    textAlign: 'center',
  }, 

  /* MISS CALL CSS */
  missContainerMain: {
    width: width_unit * 300,
    height: width_unit * 177,
    borderColor: '#d2d2d2',
    borderWidth: 1,
    borderRadius: width_unit * 20,
    padding: height_unit * 20,
    marginVertical: height_unit * 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  missSubContain: {
    borderBottomColor: '#a2a2a2',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 1,
  },
  missTxt: {
    fontFamily: colors.fonts.roboto.bold,
    color: '#a54242',
    fontSize: width_unit * 20,
  },
  missUserTxt: {
    fontFamily: colors.fonts.raleway.bold,
    color: '#a54242',
    fontSize: width_unit * 32,
    lineHeight: width_unit * 38,
  },
  missTimeTxt: {
    fontFamily: colors.fonts.roboto.regular,
    color: '#a54242',
    fontSize: width_unit * 20,
    lineHeight: width_unit * 28,
  },
  missCallbackTxt: {
    fontFamily: colors.fonts.raleway.bold,
    color: PRI_GREEN,
    fontSize: width_unit * 24,
    textAlign: 'center',
    marginTop: 4,
  },

  /* AUDIO CSS */
  audioContainerMain: {
    width: width_unit * 500,
    borderColor: '#d2d2d2',
    borderWidth: 1,
    borderRadius: width_unit * 20,
    padding: height_unit * 20,
    marginVertical: height_unit * 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dProgress: {
    width: width_unit * 80,
    height: width_unit * 80,
    borderRadius: width_unit * 40,
    backgroundColor: '#0008',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioPlayButton: {
    width: width_unit * 60,
    height: width_unit * 60,
    borderRadius: width_unit * 30,
    backgroundColor: '#eee',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: PRI_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioTime: {
    width: width_unit * 80,
    height: width_unit * 40,
    borderRadius: 5,
    backgroundColor: '#eee',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: PRI_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioTimeTxt: {
    fontFamily: colors.fonts.roboto.regular,
    fontSize: width_unit * 24,
  },
  waveImg: {
    resizeMode: 'contain',
    width:  width_unit * 320,
  },

  /* NOTIFICATION CSS */
  notimsgContainer: {
    backgroundColor: '#FFF',
    borderRadius: width_unit * 20,
    borderWidth: 1,
    borderColor: '#d2d2d2',
    paddingHorizontal: width_unit * 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  NotificationSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  NoTiMsgContainerMain: {
    flex: 1,
    alignItems: 'center',
    marginVertical: height_unit * 10,
  },
  iconNoti: {
    fontSize: 14,
    color: PRI_GREEN,
    marginTop: 2,
  }
});

class ChatDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setViewHeight: new Animated.Value(height_unit * 260),
      suggestionsParentHeight: new Animated.Value(height_unit * 30),
      suggestionsHeight: new Animated.Value(height_unit * 0),
      chatInputOpacity: new Animated.Value(1),
      chatInputTY: new Animated.Value(height_unit * 0),
      chatInputHeight: new Animated.Value(height_unit * 110),
      suggestionPan: new Animated.ValueXY(0, 0),
      messages: [
        {
          _id: 14,
          text: 'You & Lukas',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'audio',
        },
        {
          _id: 15,
          text: 'You & Lukas',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          imageUrl: 'http://www.gandex.ru/upl/oboi/gandex.ru-18509_953dcde9e545bb0901c147b8420b3350.jpg',
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'video',
        },
        {
          _id: 13,
          text: 'You & Lukas',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'misscall',
        },
        {
          _id: 12,
          text: 'You & Max',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'endcall',
        },
        {
          _id: 11,
          text: 'Max & Lukas',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'misscall',
        },
        {
          _id: 10,
          text: 'Shortlisted Email sent ,',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'notimsg',
          typeNoti: 'shortlistedemail',
        },
        {
          _id: 9,
          text: 'Rejection Email sent,',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'notimsg',
          typeNoti: 'rejectionemail',
        },
        {
          _id: 8,
          text: 'Completion Email sent,',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'notimsg',
          typeNoti: 'completionemail',
        },
        {
          _id: 7,
          text: 'Auto Share Email sent,',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'notimsg',
          typeNoti: 'autoshareemail',
        },
        {
          _id: 6,
          text: 'This is the 2nd campaign invtitation of this candidate. He has completed an interview or has been shortlisted before.',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'notimsg',
          typeNoti: 'camp2invite',
        },
        {
          _id: 5,
          text: 'Live call from jiji.sy@talkpush.com,',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'notimsg',
          typeNoti: 'livecall',
        },
        {
          _id: 4,
          text: 'Outbound call,',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'notimsg',
          typeNoti: 'outboundcall',
        },
        {
          _id: 3,
          text: 'Invitation Sms sent,',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          type: 'notimsg',
          typeNoti: 'invitesms',
        },
        {
          _id: 2,
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 3,
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 1,
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          fbBy: 'by jiji',
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor',
          createdAt: new Date(),
          avatar: 'https://placeimg.com/140/140/any',
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
      suggestions: [
        {
          title: 'Come at Office',
          body: 'Please come to my office',
        },
        {
          title: 'Pending No movement',
          body: 'It\'s pending with no movement',
        },
        {
          title: 'Location',
          body: 'Where are you now?',
        },
        {
          title: 'Email us your resume please',
          body: 'Can you please send me your resume?',
        },
        {
          title: 'Come at Office',
          body: 'Please come to my office',
        },
        {
          title: 'Pending No movement',
          body: 'It\'s pending with no movement',
        },
        {
          title: 'Location',
          body: 'Where are you now?',
        },
        {
          title: 'Email us your resume please',
          body: 'Can you please send me your resume?',
        },
        {
          title: 'Location',
          body: 'Where are you now?',
        },
        {
          title: 'Email us your resume please',
          body: 'Can you please send me your resume?',
        },
      ],
      token: '',
      fromUser: {},
      toUser: {},
      inputMessage: '',
      maxSuggestionHeight: 0,
    }
    this.minDrag = -200;
    this.maxDrag = 200;
  }

  componentDidMount() {
    // this.setState({toUser:this.props.navigation.state.params.toUser})
  }

  componentWillUnmount() {
    this.translateY.removeAllListeners();
  }

  componentWillMount() {
    this.translateY = new Animated.ValueXY(0, 0);
    this.translateY.y.setValue(200);
    this.suggestionPanResponder = PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: (e, gestureState) => {
          this.translateY.setOffset({y: this.translateY.y._value});
          this.translateY.setValue({y: 0});
        },
        onPanResponderMove: Animated.event([null, {dy: this.translateY.y}]), // Creates a function to handle the movement and set offsets
        onPanResponderRelease: (e, {vx, dy}) => {
          this.translateY.flattenOffset();
          if (Math.abs(vx) >= 0.5 || Math.abs(dy) >= 0.5 * this.maxSuggestionHeight) {
            Animated.spring(this.translateY.y, {
              toValue: dy > 0 ? this.maxDrag : this.minDrag,
              duration: 400
            }).start();
          } else {
            const betNum = this.minDrag + ((this.maxDrag - this.minDrag) / 2);
            Animated.spring(this.translateY.y, {
              toValue: this.translateY.y._value > betNum ? this.maxDrag : this.minDrag,
              duration: 400
            }).start();
          }
        }
    });

  }

  gsuggestionsParentHeight() {
    const { maxSuggestionHeight } = this.state; 
    return this.translateY.y.interpolate({
      inputRange: [this.minDrag, this.maxDrag], 
      outputRange: [maxSuggestionHeight, minSuggestionHeight],
      extrapolate: 'clamp'
    });
  }

  onSend(messages) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    if(this.socket){
      this.socket.emit('send message', {
        id: this.state.fromUser.id,//from_user
        text: messages[0].text,
        createdAt: new Date(),
        user: {
          _id: this.state.toUser._id,//to_user
        },
      })
    }
  }

  setInputMessage = (text) => {
    this.setState({
      inputMessage: text,
    });
  }
  
  toggleSuggestions = () => {
    const { suggestionsParentHeight, chatInputHeight, chatInputTY, chatInputOpacity, maxSuggestionHeight } = this.state;
    const nsph = suggestionsParentHeight._value == maxSuggestionHeight ? minSuggestionHeight : maxSuggestionHeight;
    const nciph = suggestionsParentHeight._value == maxSuggestionHeight ? (height_unit * 110) : 0;
    const ncity = suggestionsParentHeight._value == maxSuggestionHeight ? 0 : (height_unit * 110);
    const ncio = suggestionsParentHeight._value == maxSuggestionHeight ? 1 : 0;
    Animated.parallel([
      Animated.timing(
        suggestionsParentHeight,
        {
          toValue: nsph,
          duration: 500,
        }
      ),
      Animated.timing(
        chatInputHeight,
        {
          toValue: nciph,
          duration: 500,
        }
      ),
      Animated.timing(
        chatInputTY,
        {
          toValue: ncity,
          duration: 500,
        }
      ),
      Animated.timing(
        chatInputOpacity,
        {
          toValue: ncio,
          duration: 500,
        }
      ),
    ]).start();
    
  }

  setSuggestion = (message) => {
    this.setState({
      inputMessage: message.body,
    }, () => {
      Animated.timing(this.translateY.y, {
        toValue: this.maxDrag,
        duration: 400
      }).start();
    }); 
  }

  renderActions(props) {
    return (
      <View style={styles.MicroPhoneIconView}>
        <Icon
          name='microphone'
          type='FontAwesome'
          style={styles.MIcon}
          onPress={()=>this.onSend()}
        />
      </View>
    )
  }

  renderComposer = (props) => {
    const { inputMessage } = this.state;
    return (
      <TextInput
        placeholder={'Type Message'}
        placeholderTextColor={'#0004'}
        multiline={true}
        value={inputMessage}
        onChangeText={(text) => { this.setInputMessage(text); }}
        // onChange={(e) => this.onContentSizeChange(e)}
        // onContentSizeChange={(e) => this.onContentSizeChange(e)}
        // onChangeText={(text) => this.onChangeText(text)}
        style={styles.InputStyle} 
        enablesReturnKeyAutomatically
        underlineColorAndroid="transparent"
      />
    )
  }
  renderSend(props) {
    return (
      <View style={styles.SendIconView}>
        <Icon name='send-o' type='FontAwesome' style={styles.SIcon} />
      </View>
    )
  }

  renderAccessory = props => {
    const { suggestions } = this.state;
    return (
      <Animated.View style={{ alignSelf: 'stretch', height: this.gsuggestionsParentHeight() }}>
        <View 
          activeOpacity={0.8}
          // onPress={this.toggleSuggestions}
          {...this.suggestionPanResponder.panHandlers}
          style={styles.panHandlersView}>
          <View style={[styles.CmnViewStyle, { marginBottom: 3 }]} />
          <View style={styles.CmnViewStyle} />
        </View>
        <View style={styles.CmnAlignment}
          onLayout={(e) => {
            if(this.state.maxSuggestionHeight == 0) {
              this.maxSuggestionHeight = parseInt(e.nativeEvent.layout.height + (height_unit * 30));
              this.minDrag = -parseInt(height_unit * this.maxSuggestionHeight);
              this.maxDrag = parseInt(height_unit * this.maxSuggestionHeight);
              this.setState({
                maxSuggestionHeight: parseInt(e.nativeEvent.layout.height + (height_unit * 50)),
              });
            }
          }}
        >
            {
              suggestions.map((item, index) => {
                return (
                  <TouchableOpacity 
                    onPress={() => this.setSuggestion(item)}
                    activeOpacity={0.8}
                    style={[styles.TouchableBtnView, { borderRightWidth: (index % 2 == 0) ? height_unit * 1 : 0 }]}
                  >
                    <Text style={styles.TBtnTitle}>{item.title}</Text>
                  </TouchableOpacity>
                );
              })
            }
        </View>
      </Animated.View>
    );
  }

  renderAudio = (currentMessage) => {
    let userMy = _.isObject(currentMessage.user) && currentMessage.user._id !== undefined && currentMessage.user._id == 1 ? true : false; 
    return (
      <View style={[styles.audioContainerMain, userMy ? { borderBottomRightRadius: 0 } : { borderBottomLeftRadius: 0 }]}>
        <TouchableOpacity activeOpacity={0.8} style={styles.audioPlayButton}>
          <Icon type={'MaterialIcons'} name={'play-arrow'} style={styles.PlayIcon}/>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Image source={wave} style={styles.waveImg} />
        </View>
        <View style={styles.audioTime}>
          <Text style={styles.audioTimeTxt}>00:30</Text>
        </View>
      </View>
    );
  }

  renderMisscall = (currentMessage) => {
    let callend = currentMessage.type == 'endcall' ? true : false;
    let userMy = _.isObject(currentMessage.user) && currentMessage.user._id !== undefined && currentMessage.user._id == 1 ? true : false;
    return (
      <View style={[styles.missContainerMain, userMy ? { borderBottomRightRadius: 0 } : { borderBottomLeftRadius: 0 }]}>
        <View style={styles.missSubContain}>
          <Text style={[styles.missTxt, callend ? { color: PRI_BLACK } : null]}>{callend ? 'CALL ENDED' : 'MISSED CALL'}</Text>
          <Text style={[styles.missUserTxt, callend ? { color: PRI_BLACK } : null]} numberOfLines={1}>{currentMessage.text}</Text>
          <View style={[styles.missTime, { flexDirection: 'row', alignItems: 'center' }]}>
            <Icon type={'MaterialIcons'} name={callend ? 'call-end' :'call-missed'} style={{ fontSize: width_unit * 22, color: callend ? PRI_BLACK : '#a54242', marginRight: 2 }}/>
            <Text style={[styles.missTimeTxt, callend ? { color: PRI_BLACK } : null]}>
              {moment(currentMessage.createdAt).format('MMM DD, h:mm a')}
            </Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.missCallbackTxt}>
            {currentMessage.user._id == 1 ? 'Call Again' : 'Call Back'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderVideo = (currentMessage) => {
    return (
      <View style={styles.VideoMainView}>
        <Image
          source={{ uri: currentMessage.imageUrl}}
          resizeMode="cover"
          style={styles.VideoImage}
        />
        <View style={styles.VideoAbsoluteView}>
          <View style={[styles.dProgress, {position: 'absolute'}]}/>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.audioPlayButton, { zIndex: 22, borderWidth: 0 }]}
          >
            <Icon
              type={'MaterialIcons'}
              name={'play-arrow'}
              style={styles.PlayArrowStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderIconNoti = (currentMessage) => {
    if (currentMessage.typeNoti !== undefined) {
      if (currentMessage.typeNoti == 'invitesms') {
        return <Icon name='message-processing' type='MaterialCommunityIcons' style={styles.iconNoti}/>
      } else if (currentMessage.typeNoti == 'outboundcall' || currentMessage.typeNoti == 'livecall') {
        return <Icon name='phone' type='MaterialCommunityIcons' style={styles.iconNoti}/>
      } else if (currentMessage.typeNoti == 'camp2invite') {
        return <Icon name='bell-ring' type='MaterialCommunityIcons' style={styles.iconNoti}/>
      } else if (currentMessage.typeNoti == 'autoshareemail' || currentMessage.typeNoti == 'completionemail' || currentMessage.typeNoti == 'rejectionemail' || currentMessage.typeNoti == 'shortlistedemail' ) {
        return <Icon name='email' type='MaterialCommunityIcons' style={styles.iconNoti}/>
      }
    }
    return null;
  }

  renderNotification = (currentMessage) => {
    return (
      <View style={[styles.NoTiMsgContainerMain, currentMessage.user !== undefined ? currentMessage.user._id == 1 ? { marginLeft: width_unit * 30 } : { marginRight: width_unit * 30 } : null]}>
        <View style={styles.notimsgContainer}>
            <View style={styles.NotificationSubView}>
              <Text style={{ textAlign: 'center' }}>
                {this.renderIconNoti(currentMessage)}
                {' '}
                <Text style={styles.CurrentText}>{currentMessage.text}</Text>
                {' '}
                <Text style={styles.CurrentDate}>
                  {moment(currentMessage.createdAt).format('MMM DD, h:mm a')}
                </Text>
              </Text>
            </View>
        </View>
      </View>
    );
  }

  renderBubble = (props) => {
    const { currentMessage } = props;
    if(_.isObject(currentMessage) && _.isString(currentMessage.type) ) {
      if (currentMessage.type === 'misscall' || currentMessage.type === 'endcall') {
        return this.renderMisscall(currentMessage);
      } else if (currentMessage.type === 'audio') {
        return this.renderAudio(currentMessage);
      } else if(currentMessage.type === 'video') {
        return this.renderVideo(currentMessage);
      } else if(currentMessage.type === 'notimsg') {
        return this.renderNotification(currentMessage);
      }
    }
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: PRI_BLACK,
            fontSize: height_unit * 26
          },
          left: {
            color: PRI_BLACK,
            fontSize: height_unit * 26
          }
        }}
        wrapperStyle={{
          right: {
            backgroundColor: '#87c93032',
          },
          left: {
            backgroundColor: '#f5f5f5',
          },
        }}
      />
    );
  }

  setHeight() {
    Animated.timing(
      this.state.setViewHeight,
      {
          toValue: 0,
          duration: 150,
      }
    ).start();
  }

  render() {
    const { setViewHeight } = this.state;

    const chatInputOpacity = this.translateY.y.interpolate({
        inputRange: [this.minDrag, this.maxDrag], 
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });
    
    const chatInputTY = 0;
    
    const chatInputHeight = this.translateY.y.interpolate({
        inputRange: [this.minDrag, this.maxDrag], 
        outputRange: [0, (height_unit * 90)],
        extrapolate: 'clamp'
    });
    
    return (
      <View style={styles.RenderMainView}>
        <CStatusBar />
        <Container style={styles.ContainerSty}>
          <View style={styles.conSubView}>
            <View style={styles.CAlignmentView}>
              <Icon
                name='ios-arrow-back'
                style={styles.BackIconSty}
                onPress={() => this.props.navigation.goBack()}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate('CandidateProfile')}
              >
                <View style={styles.CAlignmentView}>
                  <View style={styles.MaTextView}>
                    <Text style={styles.MaTextSty}>{'MA'}</Text>
                  </View>
                  <View>
                    <Text style={styles.UNameSty}>Max Ambruster</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.IconsAlignView}>
              <Icon
                type='SimpleLineIcons'
                name='phone'
                style={styles.VoiceCallIcon}
                onPress={() => this.props.navigation.navigate('VoiceCall')}
              />
              <Icon
                type='Feather'
                name='more-horizontal'
                style={styles.OIcons}
                onPress={() => this.props.navigation.navigate('CandidateProfile')}
              />
            </View>

          </View>
          
          {/* <View style={styles.notificationContainer}>
            <Text style={styles.notificationErrorTxt}>Waiting for network...</Text>
          </View>

          <View style={[styles.notificationContainer, { backgroundColor: PRI_GREEN }]}>
            <Text style={styles.notificationErrorTxt}>Connected.</Text>
          </View> */}

            <Animated.View style={[styles.chatDetailContainer, { height: setViewHeight }]}>
              <View style={[styles.chatDetailRow, { marginTop: 8 }]}>
                <View>
                  <Text style={styles.chatDetailLabel}>Campaign</Text>
                  <Text style={[styles.chatDetailTxt]}>Lorem Ipsum</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { this.setHeight(); }}>
                  <Text style={[styles.chatDetailHideTxt, { marginRight: 5 }]}>Hide Details</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.chatDetailRow, { marginBottom: 8 }]}>
                <View style={{ width: '70%' }}>
                  <Text style={styles.chatDetailLabel}>Folder</Text>
                  <Text style={[styles.chatDetailTxt]}>Completed</Text>
                </View>
                <View style={{ width: '30%' }}>
                  <Text style={styles.chatDetailLabel}>Channel</Text>
                  <Text style={[styles.chatDetailTxt]}>Facebook</Text>
                </View>
              </View>
            </Animated.View>

            <GiftedChat
              messages={this.state.messages}
              // renderSend={SendButton}
              onSend={messages => this.onSend(messages)}
              alwaysShowSend={true}
              renderBubble={this.renderBubble}
              alwaysShowSend={true}
              showAvatarForEveryMessage={true}
              renderActions={this.renderActions}
              renderComposer={this.renderComposer}
              renderSend={this.renderSend}
              renderAccessory={this.renderAccessory}
              customTextStyle={{ fontFamily: colors.fonts.raleway.regular }} // change Message Text Style 
              accessoryStyle={{ height: this.gsuggestionsParentHeight(), backgroundColor: '#FFFFFF'}}
              primaryStyle={{ opacity: chatInputOpacity, height: chatInputHeight, alignItems: 'center', backgroundColor: '#FFFFFF', alignItems: 'flex-start' }}
              user={{ _id: 1 }}
            />
        </Container>
      </View>

    )
  }
}

export default ChatDetail;