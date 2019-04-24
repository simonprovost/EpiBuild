// import React, {Component} from 'react';
// import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

// class ModalExample extends Component {
//   state = {
//     modalVisible: false,
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     return (
//       <View style={{marginTop: 22}}>
//         <Modal
//           animationType="slide"
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}>
//           <View style={{marginTop: 22}}>
//             <View>
//               <Text>Hello World!</Text>

//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           onPress={() => {
//             this.setModalVisible(true);
//           }}>
//           <Text>Show Modal</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }


import React, { Component } from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import {
	MaterialTopTabBar,
	SafeAreaView,
	createAppContainer,
	createMaterialTopTabNavigator,
} from 'react-navigation';

import {Header, Icon} from 'react-native-elements';
import {Rules} from './components/rules'
import {Norminette} from './components/norminette'
import {UnitTests} from './components/unitTests'
import {Settings} from './components/settings'
import * as Constants from "react-native-paper";
import { grey } from 'ansi-colors';

class App extends Component {

	render() {

		return (
			<React.Fragment>
				<Header
					leftComponent={{ text: 'EpiBuild', style: {
							color: 'gray',
							marginLeft:10,
							fontSize: 22,
							width: 100
						}}}
					rightComponent={{ icon: 'home', color: 'gray' }}
					containerStyle={{
						backgroundColor:'#f8f8f8',
						alignItems: 'center',
						elevation: 25,
					}}
				/>
				<AppContainer/>
			</React.Fragment>
		);
	}
}


const stylesHeader = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1',
	},
});
export default App;


export const sendServerInformation = (message) => {
	alert(
		message,
		[
			{text: 'OK', onPress: () => console.log('OK Pressed')},
		],
		{cancelable: false},
	);
};

class MaterialTopTabBarWrapper extends React.Component {
	render() {
		const { index } = this.props.navigationState;
		const color =
			index === 0 ? "#fc929e" : index === 1 ? "#79b6f2" : index === 2 ? "#8dc891" : "#fac863";

		return (
			<SafeAreaView
				forceInset={{ top: 'never', horizontal: 'never', bottom: 'never' }}>
				<MaterialTopTabBar
					{...this.props}
					activeTintColor={color}
					indicatorStyle={{ backgroundColor: color, top:0 }}
					style={{ backgroundColor: "#fff" }}
					inactiveTintColor={'gray'}
				/>
			</SafeAreaView>
		);
	}
}

class GenericTabScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.paragraph}>
					{this.props.navigation.state.routeName}
				</Text>
				<Button
					title="Go back"
					onPress={() => this.props.navigation.goBack()}
				/>
				<StatusBar barStyle="light-content" />
			</View>
		);
	}
}

let actualColor = '#FF1493';


let Tabs = createMaterialTopTabNavigator(
	{
		Rules: {
			screen: Rules,
			navigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ tintColor }) => {
					return <Icon
						name='ios-hammer'
						type='ionicon'
						color='#000000'
					/>
				},
			}),
			showIcon: true
		},
		Norminette: {
			screen: Norminette,
			navigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ tintColor }) => {
					return <Icon
						name='ios-code'
						type='ionicon'
						color='#000000'
					/>
				},
			}),
			showIcon: true
		},
		'Unit Tests': {
			screen: UnitTests,
			navigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ tintColor }) => {
					return <Icon
						name='ios-flask'
						type='ionicon'
						color='#000000'
					/>
				},
			}),
			showIcon: true
		},
		Settings: {
			screen: Settings,
			navigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ tintColor }) => {
					return <Icon
						name='ios-settings'
						type='ionicon'
						color='#000000'
					/>
				},
			}),
			showIcon: true
		},
	},
	{
		showIcon: true,
		tabBarPosition: 'bottom',
		tabBarOptions: {
			pressColor: '#F5F5F5',
			showIcon: true,
			activeTintColor: '#000',
			inactiveTintColor: '#696969',
			style: {
				backgroundColor: '#fff',
			},
			indicatorStyle: {
				backgroundColor: actualColor,
			},
		},
		tabBarComponent: MaterialTopTabBarWrapper,
	}
);

const AppContainer = createAppContainer(Tabs);

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	paragraph: {
		fontSize: 18,
	},
});
