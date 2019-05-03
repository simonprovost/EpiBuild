import {
	ActivityIndicator, Alert,
	Animated, AsyncStorage,
	Button,
	Modal,
	Picker,
	StyleSheet,
	Text, TextInput,
	TouchableOpacity,
	View
} from "react-native";
import {sendServerInformation} from "../App"
import React, { Component } from 'react';
import {OutputRenderer} from "./OutputRenderer";
import axios from "axios";
import {apiRoot} from "../apiRoot";
import '../global';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
		backgroundColor: '#00000040',
	},
	TextInputStyle:{
		textAlign: 'center',
		width: '50%',
		padding: 5,
		borderWidth: 1,
		borderColor: '#8dc891',
		borderRadius: 10,
		marginLeft: 35,
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
	buttonStyle : {
		alignItems:'center',
		justifyContent:'center',
		width:75,
		height:75,
		backgroundColor:'#8dc891',
		borderRadius:50,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
	},
	ButtonExitLoading : {
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#79b6f2',
		width: 50,
		height: 30,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
		marginTop: 10,
	},

	buttonSplit: {
		alignItems:'center',
		justifyContent:'center',
		width:50,
		height:50,
		backgroundColor:'#8dc891',
		borderRadius:50,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
	},
});

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

export class UnitTests extends Component {
	constructor () {
		super();

		this.state = {
			visible: false,
			percentUnits: 0,
			fill: 0,
			storageRulesName: '',
			textInputRulesName: '',
			splitted: false,
			sizeOutputRenderer: new Animated.Value(0.82),
			output: '###### 🎉Welcome to the Unit Tests Screen🎉\n\n###### ✍🏼Description:✍🏼 \n\nThis Screen will be able to scan your project and show your unit tests series.\n\n###### ⚠️How to⚠️: \n\nYou must filled the following fields to be able run this screen correctly:\n\t🔸Login Name\n\t🔸Project name\n\t🔸Branch Name\n\n###### ☢️Support☢️ :\nPlease contact us if you encountered any problems.\n\n ###### 📬Contact📬️ :\n\t📌lucas.sanchez@epitech.eu\n\t📌simon1.provost@epitech.eu',
		}
	}

	componentDidMount = async () => {
		const lastRulesName = await AsyncStorage.getItem("KeyRulesName");
		if (lastRulesName) {
			this.setState({ storageRulesName: lastRulesName });
		}
		global.rulesName = this.state.storageRulesName;
	};

	runUnits = async () => {
		if (!global.userName || !global.projectName  || !global.branchName) {
			alert("One of the field requested are empty. Check your settings.");
			return;
		}
		try {
			if (this.state.textInputRulesName !== '') {
				await AsyncStorage.setItem('KeyRulesName', this.state.textInputRulesName);
				global.rulesName = this.state.textInputRulesName;
			}
		} catch (error) {
			Alert.alert("Value rules name stored Unsuccessfully.");
		}
		source = CancelToken.source();
		this.setState({
			visible: true,
			output: '',
		});
		axios.get(apiRoot + '/getTestsRunExecution?'
			+ 'userName=' + global.userName
			+ '&projectName=' + global.projectName
			+ '&branchName=' + global.branchName
			+ '&rulesName=' + global.rulesName, {
			cancelToken: source.token
		}).then((response) => {
			if (response.request.readyState === 4
				&& (response.request.status === 200 || response.request.status === 0)) {
				this.setState({output: response.data.output});
				this.setState({visible: false});
				this.setState({percentUnits: response.data.percentUnitTests});
			}
		}).catch((reason) => {
			if (axios.isCancel(reason)) {
				console.log('request cancelled');
			} else {
				alert(reason);
			}
			this.setState({visible: false});
		})
	};

	split = () => {
		Animated.spring(this.state.sizeOutputRenderer, {
			toValue: this.state.splitted ? 0.81 : 0.4,
			duration: 300,
		}).start();
		this.setState({splitted: !this.state.splitted});
	};

	render() {
		let visibleCircularProgress;
		let modal;

		if (this.state.visible) {
			modal = 	<Modal
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
							color={"#fc929e"}
						/>
						<TouchableOpacity
							style={styles.ButtonExitLoading}
							onPress={() => {
								source.cancel('Axios Request canceled by the user.');
								this.setState({
									output: '###### 🎉Welcome to the Unit Tests Screen🎉\n\n###### 📌Description📌: \n\nThis Screen will be able to scan your project and show your unit tests series.\n\n###### ⚠️How to⚠️: \n\nYou must filled the following fields to be able run this screen correctly:\n\t🔸Login Name\n\t🔸Project name\n\t🔸Branch Name\n\n###### ☢️Support☢️ :\nPlease contact us if you encountered any problems.\n\n ###### 📬Contact📬️ :\n\t📌lucas.sanchez@epitech.eu\n\t📌simon1.provost@epitech.eu',
								});
							}}
						>
							<Text style={{color: '#FFFFFF'}}>Exit</Text>
						</TouchableOpacity>
						{/*	<Text>Login : {global.userName}</Text>
						<Text>ProjectName : {global.projectName}</Text>
						<Text>BinaryName : {global.binaryName}</Text>
						<Text>branch Name : {global.branchName}</Text>*/}
					</View>
				</View>
			</Modal>
		}

		if (this.state.splitted) {
			this.state.fill = this.state.percentUnits;
			visibleCircularProgress =
				<View style={{flex:0.4}}>
					<AnimatedCircularProgress
						size={200}
						width={5}
						fill={this.state.fill}
						tintColor="#8dc891"
						duration={2000}
						rotation={0}
						backgroundColor="#3d5875">
						{
							(fill) => (
								<Text style={{fontSize: 26, fontFamily:'Roboto'}}>
									{this.state.fill + "%"}
								</Text>
							)
						}
					</AnimatedCircularProgress>
				</View>;
		}


		return (
			<React.Fragment>
				<View style={{
					flex: 0.15,
					marginTop: 1,
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection:'row',
				}}>
					<View style={{
						flex: 0.7,
					}} >
						<TextInput
							returnKeyType={"done"}
							autoCapitalize = 'none'
							autoFocus={true}
							placeholder={this.state.storageRulesName || "choose a rules name"}
							onChangeText={ data => {
								this.setState({textInputRulesName : data});
							}}
							underlineColorAndroid='transparent'
							style={styles.TextInputStyle}
							value={this.state.textInputRulesName}
						/>

					</View>

					<View style={{
						flex: 0.3,
						alignItems: 'center',
					}} >
						<TouchableOpacity
							style={styles.buttonSplit}
							onPress={() => {this.split()}}>
							<Text style={{
								color: 'white',
							}}>
								Split
							</Text>
						</TouchableOpacity>

					</View>
				</View>

				<View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>

					{visibleCircularProgress}

					<Animated.View style={{
						flex: this.state.sizeOutputRenderer,
						width: '85%',
					}}>
						<OutputRenderer
							output={this.state.output}
						/>
					</Animated.View>
					<View style={{
						flex: 0.18,
						justifyContent: 'center',
					}}>
						<TouchableOpacity
							style={styles.buttonStyle}
							onPress={this.runUnits}
						>
							<Text style={{color: '#FFFFFF'}}>Run</Text>
						</TouchableOpacity>
					</View>
					{modal}
				</View>
			</React.Fragment>

		);
	}
}