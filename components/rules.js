import {Button, Text, View} from "react-native";
import {sendServerInformation} from "../App"
import React, { Component } from 'react';
import { Icon } from 'react-native-elements';

export class Rules extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Rules By Epitech</Text>
        <View style={{ height: 100, marginTop: 10, width: 50}}>
          <Button
              onPress={() => sendServerInformation("Rules by epitech running...")}
              title="Run"
              color="#FF1493"
          />
        </View>
      </View>
    );
  }
}