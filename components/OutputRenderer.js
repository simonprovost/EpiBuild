import {Text, View, ScrollView} from "react-native";
import React, { Component } from 'react';


export class OutputRenderer extends Component {
  render() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{
                flex: 1,
                backgroundColor: '#E8E8E8',
                borderRadius: 10,
                borderColor: '#DCDCDC',
                borderWidth: 2,
            }}>
                <Text>
                    {this.props.output}
                </Text>
            </View>
        </ScrollView>
    );
  }
}