import React, { Component, Fragment } from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    Button,
    Text,
    View,
    FlatList,
    Dimensions,
    TextInput,
} from 'react-native';
//import FadeInView from "./animation";
import { Switch, Image } from 'react-native';
//import LogoTitle from "./headerlogo";
import { ScrollView } from 'react-native-gesture-handler';
var data =

    [
        {
            task: "Jump",
            subtask: [
                {
                    subtask1: "jump22",
                },
                {
                    subtask1: "jump",
                }
            ]
        },
        {
            task: "Run",

            subtask: [{
                subtask1: "run "
            },
            { subtask1: "run22 ", }
            ],
        }
    ]
// var data1 =
// [{

// subtask:"yoooo",
// subtask1:"yaaay"
// }]

export default class EventPlan2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            visible: false,
            eventID: '',
            flag:true
        };
    }

    renderitem2 = ({ item }) => {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity >
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: 20, fontFamily: 'Roboto', textAlign: 'center', borderWidth: 1,
                                borderRadius: 6,
                                borderColor: '#E91E63',
                                width: '80%',
                                padding: 5,
                                backgroundColor: '#FFEB3B',
                                fontWeight: 'bold'
                            }}>
                            {item.subtask1}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    };
    renderItem = ({ item }) => {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity >
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <Text
                            numberOfLines={1}
                            style={{ fontSize: 32, fontFamily: 'Roboto', fontWeight: 'bold', }}>
                            {item.task}
                        </Text>
                        
                            <View>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require('../resources/add.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{left:20}}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require('../resources/edit.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{left:40}}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require('../resources/remove.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <FlatList
                            data={item.subtask}
                            renderItem={this.renderitem2}
                        // <View style={{flex:1}}>
                        // <Text style={styles.TextViewStyle}>
                        // {console.warn(JSON.stringify(item2.subtask1))}
                        // </Text>
                        // </View>
                        // }
                        />
                    </TouchableOpacity>

                </View>
            </ScrollView>
        );
    };
    upevents = () => {

        return (
            <FlatList data={data}
                renderItem={this.renderItem} />
        );

    };

    render() {


        return (
            <ScrollView style={styles.scrollView}>
                <View style={{ backgroundColor: 'white' }}>
                    <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 32, fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center' }}>
                            Marathon
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'row' }} >
                            <View>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require('../resources/add.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{left:20}}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require('../resources/edit.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{left:40}}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require('../resources/remove.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 32, fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center' }}>Subtasks</Text>
                    {this.props.upcoming != null && this.upevents()}
                    {
                        this.upevents()
                    }
                    
                </View>

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
    },
    button1: {
        alignItems: 'center',
        backgroundColor: 'red',
    },
    scrollView: {
        // backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    count: { flex: 3 },
    stretch: {
        width: 430,
        height: 300,
        resizeMode: 'center',
    },

    stretch: {
        width: 430,
        height: 200,
        resizeMode: 'stretch',
    },

    container: {
        flex: 1,
        // marginVertical: 20
    },

    count: {
        flexDirection: 'column-reverse',
    },
    bottomItem: {
        width: '100%',
        padding: '2%',
    },
    bottomItemInner: {
        backgroundColor: '#4796ae',
        padding: 5,
        borderRadius: 7,
    },
    ScrollView: {
        backgroundColor: 'red',
        marginHorizontal: 30,
    },

    texttask: {
        fontSize: 32, fontFamily: 'Roboto', fontWeight: 'bold'

    },
    imagee: {
        flex: 1,
        flexDirection: "row"
    }
});

