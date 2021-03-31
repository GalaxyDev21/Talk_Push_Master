import React, { Component } from 'react';
import {
    WebView,
    Dimensions,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import colors from '../../config/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { PRI_WHITE, PRI_GREEN } from '../../assets/consts';

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
    },
    HeaderView: {
        backgroundColor: PRI_GREEN,
        height: height_unit * 136,
        width: width,
        paddingHorizontal: width_unit * 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    HSubView: {
        flexDirection: 'row',
    },
    HIcon: {
        color: PRI_WHITE,
        opacity: 0.5,
        fontSize: width_unit * 35,
        opacity: 0.5,
    },
    HTitle: {
        marginBottom: 5,
        fontFamily: colors.fonts.roboto.regular,
        fontSize: width_unit * 24,
        color: PRI_WHITE,
        opacity: 0.5,
        marginLeft: 5,
    },
});

export default class VoiceCall extends Component {
  render() {
    return (
        <View style={styles.MainView}>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.props.navigation.goBack()}
                style={styles.HeaderView}
            >
                <View style={styles.HSubView}>
                    <Icon name="ios-arrow-down" style={styles.HIcon} />
                    <Text style={styles.HTitle}>VOICE CALL</Text>
                </View>
            </TouchableOpacity>

            <WebView source={{uri: 'https://www.google.com'}} />

        </View>
    );
  }
}