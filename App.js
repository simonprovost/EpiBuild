import React, { Component } from 'react';
import {Button,
	StyleSheet,
	View,
	Text,
	Modal,
	ActivityIndicator
} from 'react-native';

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
					// rightComponent={{ icon: 'home', color: 'gray' }}
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

let actualColor = '#FF1493';


let Tabs = createMaterialTopTabNavigator(
	{
		Rules: {
			screen: Rules,
			// navigationOptions: ({ navigation }) => ({
			// 	tabBarIcon: ({ tintColor }) => {
			// 		return <Icon
			// 			name='ios-hammer'
			// 			type='ionicon'
			// 			color='#000000'
			// 		/>
			// 	},
			// }),
			showIcon: true
		},
		Norminette: {
			screen: Norminette,
			// navigationOptions: ({ navigation }) => ({
			// 	tabBarIcon: ({ tintColor }) => {
			// 		return <Icon
			// 			name='ios-code'
			// 			type='ionicon'
			// 			color='#000000'
			// 		/>
			// 	},
			// }),
			showIcon: true
		},
		'Unit Tests': {
			screen: UnitTests,
			// navigationOptions: ({ navigation }) => ({
			// 	tabBarIcon: ({ tintColor }) => {
			// 		return <Icon
			// 			name='ios-flask'
			// 			type='ionicon'
			// 			color='#000000'
			// 		/>
			// 	},
			// }),
			showIcon: true
		},
		Settings: {
			screen: Settings,
			// navigationOptions: ({ navigation }) => ({
			// 	tabBarIcon: ({ tintColor }) => {
			// 		return <Icon
			// 			name='ios-settings'
			// 			type='ionicon'
			// 			color='#000000'
			// 		/>
			// 	},
			// }),
			showIcon: true
		},
	},
	{
		// showIcon: true,
		tabBarPosition: 'bottom',
		tabBarOptions: {
			pressColor: '#F5F5F5',
			// showIcon: true,
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
