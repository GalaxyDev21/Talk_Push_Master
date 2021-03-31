import React, { Component } from 'react';
import {
    Dimensions,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import _ from 'lodash';
import Autocomplete from '../../libs/react-native-autocomplete-input';
import colors from '../../config/styles';
import { Icon } from 'native-base';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PRI_BLACK, PRI_WHITE, PRI_GREEN } from '../../assets/consts';

const ArrayData = [
    {
      id: 1,
      status: 'Completed',
    },
    {
      id: 2,
      status: 'Community Mngt Exp',
    },
    {
      id: 3,
      status: 'Video Connect Experience',
    },
    {
      id: 4,
      status: 'Costa Rica',
    },
];

const { width, height } = Dimensions.get("window");
const width_unit = width / 750;
const height_unit = height / 1334;

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    InputStyle: {
        fontFamily: colors.fonts.raleway.regular,
        color: PRI_GREEN,
        padding: width_unit * 36,
        backgroundColor: '#f5f5f5',
        color: PRI_BLACK,
    },
    MIconStyle: {
        color: PRI_GREEN,
        fontSize: height_unit * 50,
    },
    ListStyles: {
        borderWidth: 0,
        margin: 0,
    },
    TextStyles: {
        fontFamily: colors.fonts.raleway.regular,
        color: '#575756',
        fontSize: width_unit * 26,
    },
    AutocompleteSubView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: width,
        height: height_unit * 120,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: width_unit * 36,
    },
    headerView: {
        backgroundColor: PRI_GREEN,
        height: height_unit * 120,
        width: width,
        paddingHorizontal: width_unit * 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 5,
    },
    SubHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex:1,
    },
    TextView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    IconStyle: {
        color: PRI_WHITE,
    },
    AddTagText: {
        fontFamily: colors.fonts.raleway.regular,
        color: PRI_WHITE,
        fontSize: width_unit * 34,
        paddingLeft: width_unit * 20,
    },
});

export default class AssignLabel extends Component {
    constructor(props){
        super(props);
        this.state = {
            cData: ArrayData,
            tag: '',
            check: false,
            selectedTag: {},
        };
    }

    renderTextInput = () => {
        return(
            <TextInput
                placeholderTextColor={'#aaa'}
                placeholder="Enter Tags"
                style={styles.InputStyle}
                value={this.state.tag}
                autoFocus
                selectionColor={PRI_GREEN}
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ tag: text })}
                autoCorrect={false}
            />
        );
    }

    findFilm(tag) {
        if (tag === '') {
          return [];
        }
        const regex = new RegExp(`${tag.trim()}`, 'i');
        const ret = _.filter(ArrayData, item => item.status.search(regex) >= 0);
        console.log(ret);
        return ret;
    }
    
    setMailId(text) {
        const ArrayData = this.findFilm(text);
        this.setState({ tag: text, cData: ArrayData });
    }

    setItem = (item) => {
        this.setState({ selectedTag: item }, () => {
            if(this.autoComplete) {
                this.autoComplete.refresh();
            }
        });
        
    };

    render() {
        const { tag, cData, selectedTag } = this.state;
        return (
            <View style={styles.MainView}>
                <View style={styles.headerView}>
                    <View style={styles.SubHead}>
                        <View style={styles.TextView}>
                            <Icon
                                name='ios-arrow-back'
                                style={styles.IconStyle}
                                onPress={() => this.props.navigation.goBack()}
                            />
                            <Text style={styles.AddTagText}>Add Tags</Text>
                        </View>
                    </View>
                </View>
                
                <Autocomplete
                    autoCapitalize="none"
                    ref={(o) => { this.autoComplete = o; }}
                    autoCorrect={false}
                    data={tag === '' ? [] : cData}
                    defaultValue={tag}
                    onChangeText={(text) => { this.setMailId(text); }}
                    listStyle={styles.ListStyles}
                    inputContainerStyle={styles.ListStyles}
                    renderTextInput={this.renderTextInput}
                    renderItem={(item, index) => {
                        if(_.isEqual(item, selectedTag)) {
                            return (
                                <TouchableOpacity
                                    key={`auto_item_${index}`}
                                    activeOpacity={0.8}
                                    onPress={() => { this.setItem(item); }}
                                    style={styles.AutocompleteSubView}
                                >
                                    <Text style={styles.TextStyles}>{item.status}</Text>
                                    <MIcon name="check" style={styles.MIconStyle}/>
                                </TouchableOpacity>
                            );
                        }
                        return (
                            <TouchableOpacity
                                key={`auto_item_${index}`}
                                activeOpacity={0.8}
                                onPress={() => { this.setItem(item); }}
                                style={[styles.AutocompleteSubView, { backgroundColor: '#fff' }]}
                            >
                                <Text style={styles.TextStyles}>{item.status}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        );
    }
}