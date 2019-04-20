import {Button, Text, View, TouchableOpacity, TouchableNativeFeedback} from "react-native";
import {sendServerInformation} from "../App"
import React, { Component } from 'react';
import Markdown from 'react-native-markdown-renderer';
import {OutputRenderer} from './OutputRenderer';

export class Rules extends Component {
    constructor () {
        super();
        
        this.state = {
            output: 'pute',
        }
    }
    
    render() {
        const buttonStyle = {
            alignItems:'center',
            justifyContent:'center',
            width:75,
            height:75,
            backgroundColor:'#FF1493',
            borderRadius:50,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
        };

        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{
                    marginTop: '5%',
                    flex: 0.85,
                    width: '85%'
                }}>
                    <OutputRenderer
                        output={this.state.output}
                    />
                </View>
                <View style={{
                    flex: 0.15
                }}>
                    <TouchableOpacity
                        style={buttonStyle}
                    >
                        <Text style={{color: '#FFFFFF'}}>Run</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}