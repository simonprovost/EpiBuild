import {Text, View, ScrollView, StyleSheet} from "react-native";
import React, { Component } from 'react';

const styles = StyleSheet.create({
    output : {
        margin: 10,
        color:'#c5a5c5',
        fontFamily:'monospace',
        textAlign: 'auto',
        fontSize: 11,
    },
    rendererStyle: {
        flex: 1,
        backgroundColor: '#282c34',
        borderRadius: 10,
        borderWidth: 2,
    }
});

export class OutputRenderer extends Component {
  render() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.rendererStyle}>
                <Text style={styles.output}>
                    {this.props.output}
                </Text>

            </View>
        </ScrollView>
    );
  }
}