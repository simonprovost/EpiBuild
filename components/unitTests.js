import {Button, Text, View} from "react-native";
import {sendServerInformation} from "../App"
import React, { Component } from 'react';

export class UnitTests extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Unit Tests</Text>
        <View style={{ height: 100, marginTop: 10, width: 50}}>
          <Button
              onPress={() => sendServerInformation("Unit tests running...")}
              title="Run"
              color="#7FFFD4"
          />
        </View>
      </View>
    );
  }
}