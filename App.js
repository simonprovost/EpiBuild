import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Simon le + bô</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// class Button extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     sendServerInformation = () => {
//     }

//     render() {
//         <Button onClick={() => this.sendServerInformation()}>
//             Launch tests
//         </Button>
//     }
// }