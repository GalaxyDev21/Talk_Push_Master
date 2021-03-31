import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  Animated,
} from "react-native";
import { Container, Icon } from 'native-base';
import { GiftedChat, Bubble } from '../../libs/react-native-gifted-chat';
import { PRI_WHITE, PRI_BLACK, PRI_GREEN, SEC_GRAY, SEC_DGRAY } from "../../assets/consts";
import colors from '../../config/styles';
import CStatusBar from "../../components/CStatusBar";
// import io from 'react-native-socket.io-client';
// import SendButton from './components/sendbutton';
// import InputText from './components/input';
// import jwtDecode from 'jwt-decode';
// import styles from './style';
const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;
const minSuggestionHeight = height_unit * 30;
const maxSuggestionHeight = height_unit * 660;

const styles = StyleSheet.create({
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
    fontSize: width_unit * 24
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
      messages: [
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
        // {
        //   _id: 6,
        //   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,',
        //   createdAt: new Date(),
        //   avatar: 'https://placeimg.com/140/140/any',
        //   user: {
        //     _id: 1,
        //     name: 'React Native',
        //     avatar: 'https://placeimg.com/140/140/any',
        //   },
        //   type: 'notimsg',
        //   typeNoti: 'camp2invite',
        // },
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
          _id: 1,
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
    }


  }
  componentWillMount() {

  }
  componentDidMount() {
    this.toggleSuggestions();
    // this.setState({toUser:this.props.navigation.state.params.toUser})
  }

  onSend(messages) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    this.socket.emit('send message', {
      id: this.state.fromUser.id,//from_user
      text: messages[0].text,
      createdAt: new Date(),
      user: {
        _id: this.state.toUser._id,//to_user
      },
    })
  }

  setInputMessage = (text) => {
    this.setState({
      inputMessage: text,
    });
  }
  
  toggleSuggestions = () => {
    const { suggestionsParentHeight, suggestionsHeight, chatInputHeight, chatInputTY, chatInputOpacity } = this.state;
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
    console.log(message);
    this.setState({
      inputMessage: message.body,
    }, () => {
      this.toggleSuggestions();
    });

    
  }
 

  renderActions(props) {
    return (
      <View style={{ width: height_unit * 80, height: height_unit * 80, backgroundColor: '#0004', borderRadius: width_unit * 80, alignItems: 'center', justifyContent: 'center', marginHorizontal: width_unit * 25 }}>
        <Icon name='microphone' type='FontAwesome' style={{ fontSize: 20, color: PRI_WHITE }} onPress={()=>this.onSend()}/>
      </View>
    )
  }

  renderComposer = (props) => {
    const { inputMessage } = this.state;
    return (
      <TextInput
        placeholder={'Type Message'}
        placeholderTextColor={SEC_GRAY}
        multiline={true}
        value={inputMessage}
        onChangeText={text => this.setInputMessage(text)}
        // onChange={(e) => this.onContentSizeChange(e)}
        // onContentSizeChange={(e) => this.onContentSizeChange(e)}
        // onChangeText={(text) => this.onChangeText(text)}
        style={{ width: width_unit * 510, height: height_unit * 80, borderRadius: 30, borderColor:SEC_GRAY, borderWidth: 1, paddingLeft: 16, fontFamily: colors.fonts.raleway.regular,
          alignItems: 'center',
        textAlign: 'center',
      }} 
        enablesReturnKeyAutomatically
        underlineColorAndroid="transparent"
      />
    )
  }
  renderSend(props) {
    return (
      <View style={{ width: height_unit * 80, height: height_unit * 80, backgroundColor: PRI_GREEN, borderRadius: width_unit * 80, alignItems: 'center', justifyContent: 'center', marginHorizontal: width_unit * 25 }}>
        <Icon name='send-o' type='FontAwesome' style={{ fontSize: 20, marginLeft: -3, color: PRI_WHITE }} />
      </View>
    )
  }

  renderAccessory = props => {
    const { suggestionsParentHeight, suggestions } = this.state;
    return (
      <Animated.View style={{ alignSelf: 'stretch', height: suggestionsParentHeight }}>
        <TouchableOpacity activeOpacity={0.8} onPress={this.toggleSuggestions} style={{ alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', height: (height_unit * 31), borderBottomColor: SEC_DGRAY, borderBottomWidth: (height_unit * 1)}}>
          <View style={{ width: 40, height: (height_unit * 4), backgroundColor: '#BBB', marginBottom: 3 }} />
          <View style={{ width: 40, height: (height_unit * 4), backgroundColor: '#BBB' }} />
        </TouchableOpacity>
        <View style={{ 
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
            {
              suggestions.map((item, index) => {
                return (
                  <TouchableOpacity 
                  onPress={() => this.setSuggestion(item)}
                  style={{ 
                    width: '50%',
                    height: (height_unit * 110),
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    borderBottomWidth: height_unit * 1,
                    borderBottomColor: SEC_DGRAY,
                    borderRightWidth: (index % 2 == 0) ? 1 : 0,
                    borderRightColor: SEC_DGRAY,
                  }}>
                    <Text 
                      style={{ 
                        fontFamily: colors.fonts.raleway.regular,
                        fontSize: height_unit * 26,
                        lineHeight: height_unit * 30,
                        paddingHorizontal: height_unit * 30,
                      }}>
                        {item.title}
                    </Text>
                  </TouchableOpacity>
                );
              })
            }
        </View>
      </Animated.View>
    );
  }



  renderBubble = (props) => {
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
          duration: 800,
      }
    ).start();
  }

  render() {
    const { setViewHeight, suggestionsParentHeight, suggestionsHeight, chatInputOpacity, chatInputTY, chatInputHeight, inputMessage } = this.state;
    return (
      <View style={{ flex: 1 }}>
      <CStatusBar />
      <Container style={{ backgroundColor: PRI_WHITE }}>
        <View style={{ elevation: 8, backgroundColor: PRI_GREEN, height: height_unit * 136, width: width, paddingHorizontal: width_unit * 30, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='ios-arrow-back' style={{ color: '#fff' }} onPress={() => this.props.navigation.goBack()} />
             <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('CandidateProfile')}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                  height: height_unit * 90,
                  width: height_unit * 90,
                  backgroundColor: SEC_GRAY,
                  borderRadius: height_unit * 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: width_unit * 20,
                }}>
                    <Text style={{
                      color: PRI_GREEN,
                      fontSize: height_unit * 32,
                      height: height_unit * 90,
                      width: height_unit * 90,
                      borderRadius: height_unit * 45,
                      textAlign: 'center',
                      lineHeight: height_unit * 90,
                      fontFamily: colors.fonts.raleway.black,
                    }}>{'MA'}</Text>
                    </View>
                  <View>
                    <Text style={{ fontFamily: colors.fonts.raleway.regular, color: '#fff', fontSize: width_unit * 34, paddingLeft: width_unit * 20 }}>Max Ambruster</Text>
                  </View>
                </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Icon type='SimpleLineIcons' name='phone' style={{ color: PRI_WHITE, paddingRight: width_unit * 20 }} onPress={() => this.props.navigation.navigate('VoiceCall')} />
            <Icon type='Feather' name='more-horizontal' style={{ color: PRI_WHITE }} onPress={() => this.props.navigation.navigate('CandidateProfile')} />
          </View>

        </View>
        
        {/* <View style={styles.notificationContainer}>
          <Text style={styles.notificationErrorTxt}>Waiting for network...</Text>
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
            customTextStyle={{
              fontFamily: colors.fonts.raleway.regular, // change Message Text Style
            }}
            accessoryStyle={{
              height: suggestionsParentHeight,
              backgroundColor: '#FFFFFF'
            }}
            primaryStyle={{
              opacity: chatInputOpacity,
              transform: [{ translateY: chatInputTY }],
              height: chatInputHeight,
              alignItems: 'center',
            }}
            containerStyle={{
              marginBottom: 0,
            }}
            user={{
              _id: 1,
            }}
          />
        </Container>
      </View>

    )
  }
}

export default ChatDetail;