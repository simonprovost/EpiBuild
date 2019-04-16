import {Button, Text, View} from "react-native";
import {sendServerInformation} from "../App"
import React, { Component } from 'react';

export class Norminette extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Norminette</Text>

        <View style={{ height: 100, marginTop: 10, width: 50}}>
          <Button
              onPress={() => sendServerInformation("Norminette running...")}
              title="Run"
              color="#FFA500"
          />
        </View>

      </View>
    );
  }
}