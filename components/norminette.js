import {ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View,
Platform, Button, Picker, Alert} from "react-native";
import React, { Component } from 'react';
import {OutputRenderer} from "./OutputRenderer";
import axios from "axios";
import {apiRoot} from "../apiRoot";
import '../global';

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

export class Norminette extends Component {
	constructor () {
		super();

		this.state = {
			PickerSelectedVal : '',
			visible: false,
			output: 'Lorem IPSOU dolor sit amet, consectetur adipiscing elit. Suspendisse vitae velit suscipit, lacinia ipsum eget, aliquam urna. Fusce eget molestie leo, scelerisque dignissim eros. Praesent pellentesque diam ac justo dictum, tempor posuere est ornare. Curabitur sit amet semper nisl, sed hendrerit arcu. Mauris laoreet vehicula congue. Pellentesque id sollicitudin tellus, eget ullamcorper augue. Sed nunc est, feugiat vel ipsum ac, posuere ullamcorper urna.\n\n\n Proin feugiat urna id libero molestie, et dapibus dui dapibus. Curabitur ac eros ut metus vestibulum faucibus vestibulum at nisi. Mauris gravida mauris eu neque accumsan imperdiet. Praesent pharetra orci non imperdiet volutpat. Morbi massa justo, suscipit sed nisi sit amet, placerat finibus enim. Phasellus vel porttitor orci, non ultrices felis. Duis semper tortor quis pulvinar molestie. Curabitur vel imperdiet nisi. Etiam odio massa, mollis non iaculis ut, aliquam vitae sem. Cras a interdum risus, sit amet faucibus elit. Donec vehicula pretium erat vitae volutpat. Donec porta libero ac mi eleifend pretium. Vivamus mattis non sem vitae tristique. Etiam ut est convallis, tincidunt tellus vel, aliquet odio. Morbi mattis eu nibh ac sagittis.',
		}
	}

	getSelectedPickerValue=()=>{
		Alert.alert("Selected country is : " +this.state.PickerSelectedVal);
	};

	runNorm = () => {
		this.setState({
			visible: true,
			output: '',
		});
		axios.get(apiRoot + '/getNormExecution?'
			+ 'userName=' + global.userName
			+ '&projectName=' + global.projectName
			+ '&branchName=' + global.branchName
			+ '&normiChoice=' + this.state.PickerSelectedVal).then((response) => {
			if (response.request.readyState === 4
				&& (response.request.status === 200 || response.request.status === 0)) {
				this.setState({output: response.data.output});
				this.setState({visible: false});
			}
		}).catch((reason) => {
			alert(reason);
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

						<Picker.Item label="normEZ" value="normEZ" />
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