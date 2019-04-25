/*
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator, TouchableOpacity, Text,
} from 'react-native';
import {Button} from "react-native-elements";

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorHolder: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      visible: false,
    }
  }
  render() {
    if (this.state.visible) {
      return (
          <Modal
              transparent
              animationType={'none'}
              visible={this.state.visible}
              onRequestClose={() => { console.log('Noop'); }}
          >
            <View style={styles.modalBackground}>
              <View style={styles.activityIndicatorHolder}>
                <ActivityIndicator
                    animating={true}
                    size="large"
                />
              </View>
            </View>
          </Modal>
      );
    }
    return (
        <View>
          <TouchableOpacity
              style={{
                alignItems:'center',
                justifyContent:'center',
                width:75,
                height:75,
                backgroundColor:'#fc929e',
                borderRadius:50,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
              }}
              onPress={() =>  {
                this.setState({visible: true})
              }}
          >
            <Text style={{color: '#FFFFFF'}}>Run</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
export default App;
*/

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
