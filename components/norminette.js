import {ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View,
Platform, Button, Picker, Alert} from "react-native";
import React, { Component } from 'react';
import {OutputRenderer} from "./OutputRenderer";
import axios from "axios";
import {apiRoot} from "../apiRoot";
import '../global';
import axiosCancel from 'axios-cancel';

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

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

export class Norminette extends Component {
	constructor () {
		super();

		this.state = {
			PickerSelectedVal : '',
			visible: false,
			output: '###### 🎉Welcome to the Norminette Screen🎉\n\n###### 📌Description📌: \n\nThis Screen will be able to scan your project and show you where is your errors norms.\n\n###### ⚠️How to⚠️: \n\nYou must filled the following fields to be able run this screen correctly:\n\t🔸Login Name\n\t🔸Project name\n\t🔸Branch Name\n\nDon\'t forget to choose a Norminette like normEZ in the top of this screen.\n\n###### ☢️Support☢️ :\nPlease contact us if you encountered any problems.\n\n ###### 📬Contact📬️ :\n\t📌lucas.sanchez@epitech.eu\n\t📌simon1.provost@epitech.eu',
		}
	}


	runNorm = () => {
		source = CancelToken.source();
		this.setState({
			visible: true,
			output: '',
		});
		axios.get(apiRoot + '/getNormExecution?'
			+ 'userName=' + global.userName
			+ '&projectName=' + global.projectName
			+ '&branchName=' + global.branchName
			+ '&normiChoice=' + this.state.PickerSelectedVal, {
			cancelToken: source.token
		}).then((response) => {
			if (response.request.readyState === 4
				&& (response.request.status === 200 || response.request.status === 0)) {
				this.setState({output: response.data.output});
				this.setState({visible: false});
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

	render() {
		const buttonStyle = {
			alignItems:'center',
			justifyContent:'center',
			width:75,
			height:75,
			backgroundColor:'#79b6f2',
			borderRadius:50,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 3,
			},
			shadowOpacity: 0.27,
			shadowRadius: 4.65,
			elevation: 6,
		};
		const ButtonExitLoading = {
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
		};

		axiosCancel(axios, {
			debug: false // default
		});



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
							style={ButtonExitLoading}
							onPress={() => {
								source.cancel('Axios Request canceled by the user.');
								this.setState({output: '###### 🎉Welcome to the Norminette Screen🎉\n\n###### 📌Description📌: \n\nThis Screen will be able to scan your project and show you where is your errors norms.\n\n###### ⚠️How to⚠️: \n\nYou must filled the following fields to be able run this screen correctly:\n\t🔸Login Name\n\t🔸Project name\n\t🔸Branch Name\n\nDon\'t forget to choose a Norminette like normEZ in the top of this screen.\n\n###### ☢️Support☢️ :\nPlease contact us if you encountered any problems.\n\n ###### 📬Contact📬️ :\n\t📌lucas.sanchez@epitech.eu\n\t📌simon1.provost@epitech.eu',});
							}}
						>
							<Text style={{color: '#FFFFFF'}}>Exit</Text>
						</TouchableOpacity>
						{/*<Text>Login : {global.userName}</Text>
						<Text>ProjectName : {global.projectName}</Text>
						<Text>BinaryName : {global.binaryName}</Text>
						<Text>branch Name : {global.branchName}</Text>*/}
					</View>
				</View>
			</Modal>
		}

		return (
			<React.Fragment>
				<View style={{marginTop: 1, justifyContent: 'center'}}>
					<Picker
						selectedValue={this.state.PickerSelectedVal}
						onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

						<Picker.Item label="Choose a norminette" value="null" />
						<Picker.Item label="normEZ" value="normEZ" />
						<Picker.Item label={"Doom"} value={"doom"} />
						<Picker.Item label="Gegel85" value="Gegel85" />
					</Picker>
				</View>

				<View style={{ flex: 1, alignItems: 'center' }}>

					<View style={{
						marginTop: '5%',
						flex: 0.85,
						width: '85%'
					}}>
						<OutputRenderer
							output={this.state.output}
						/>
					</View>
					<View style={{
						flex: 0.15
					}}>
						<TouchableOpacity
							style={buttonStyle}
							onPress={this.runNorm}
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