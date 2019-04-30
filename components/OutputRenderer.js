import {Text, View, ScrollView, StyleSheet} from "react-native";
import React, { Component } from 'react';
import Ansi from "./ansiReactNative";

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
    ainsiOutput = (output) => {
        return <Ansi>
            {output}
        </Ansi>;
    };

    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.rendererStyle}>
                    <View style={{margin:10}}>
                        {this.ainsiOutput(this.props.output)}
                    </View>
                </View>
            </ScrollView>
        );
    }
}