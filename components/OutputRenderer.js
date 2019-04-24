import {Text, View, ScrollView} from "react-native";
import React, { Component } from 'react';


export class OutputRenderer extends Component {
  render() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{
                flex: 1,
                //E8E8E8
                backgroundColor: '#282c34',
                borderRadius: 10,
                borderWidth: 2,
            }}>
                <Text style={{marginLeft:10, marginTop:10, marginBottom:10, marginRight:10, color:'#c5a5c5', fontFamily:'Roboto', textAlign: 'auto'}}>
                    {this.props.output}
                </Text>
            </View>
        </ScrollView>
    );
  }
}