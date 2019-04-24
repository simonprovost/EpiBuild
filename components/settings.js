import {Alert, AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import { material } from 'react-native-typography'


export class Settings extends Component {
	constructor()
	{
		super();

		this.state={

			textInputDataLogin : '',
			getValueLogin : '',

			textInputNameProject : '',
			getValueNameProject : ''

		}
	}

	setValueLocally = async () => {
		try {
			await AsyncStorage.setItem('KeyLogin', this.state.textInputDataLogin);
			await AsyncStorage.setItem('KeyNameProject', this.state.textInputNameProject);
				Alert.alert("Value Stored successfully.",
				`Login: ` + this.state.textInputDataLogin+ `\nNameProject: ` + this.state.textInputNameProject);
		} catch (error) {
			Alert.alert("Value Stored Unsuccessfully.",
				`Login: ` + this.state.textInputDataLogin+ `\nNameProject: ` + this.state.textInputNameProject);
		}
	};

	componentDidMount = async () => {
		const lastLogin = await AsyncStorage.getItem("KeyLogin");
		if (lastLogin) {
			this.setState({ getValuePlaceHolderLogin: lastLogin });
		}

		const lastNameProject = await AsyncStorage.getItem("KeyNameProject");
		if (lastLogin) {
			this.setState({ getValueNameProject: lastNameProject });
		}
	};

	render() {

		return (
			<React.Fragment>

				<View style={{alignItems: 'stretch', marginLeft: 10, marginBottom: 10, marginTop: 20}}>
					<Text style={material.headline}>Login Name</Text>
				</View>

				<View style={styles.MainContainer}>

					<TextInput
						returnKeyType={"next"}
						autoFocus={true}
						placeholder={this.state.getValuePlaceHolderLogin || "Enter your login name here."}
						onChangeText={ data => this.setState({textInputDataLogin : data}) }
						underlineColorAndroid='transparent'
						style={styles.TextInputStyle}
						value={this.state.textInputDataLogin}
					/>
					<TouchableOpacity onPress={
						async () => {
							try {
								this.setState({textInputDataLogin : ''});
								this.setState({getValuePlaceHolderLogin : ''});
								await AsyncStorage.removeItem('KeyLogin');
							} catch (error) {
								Alert.alert("Value that you need to remove is an Error. KeyLogin.");
							}
						}
					} activeOpacity={0.7} style={styles.button} >
						<Text style={styles.buttonText}> Reset Login </Text>
					</TouchableOpacity>
				</View>

				<View style={{alignItems: 'stretch', marginLeft: 10, marginBottom: 10, marginTop: 25}}>
					<Text style={material.headline}>Project Name</Text>
				</View>

				<View style={styles.MainContainer}>

					<TextInput
						returnKeyType={"next"}
						autoFocus={true}
						placeholder={this.state.getValueNameProject || "Enter your project name here."}
						onChangeText={ data => this.setState({textInputNameProject : data}) }
						underlineColorAndroid='transparent'
						style={styles.TextInputStyle}
						value={this.state.textInputNameProject}
					/>
					<TouchableOpacity onPress={
						async () => {
							try {
								await AsyncStorage.removeItem('KeyNameProject');
								this.setState({textInputNameProject : ''});
								this.setState({getValueNameProject : ''})
							} catch (error) {
								Alert.alert("Value that you need to remove is an Error. KeyNameProject.");
							}
						}
					} activeOpacity={0.7} style={styles.button} >
						<Text style={styles.buttonText}> Reset name project </Text>
					</TouchableOpacity>

				</View>

				<View style = {{
					borderWidth: 0.5,
					borderColor:'black',
					margin:20,
					elevation: 10,
				}} />

				<View style={{
					justifyContent: 'center',
					alignItems: 'center',
					flex: 0.5
				}}>
					<TouchableOpacity onPress={this.setValueLocally} activeOpacity={0.7} style={styles.button} >
						<Text style={styles.buttonText}> Save Informations </Text>
					</TouchableOpacity>
				</View>
			</React.Fragment>
		)
	}
}

const styles = StyleSheet.create({

	MainContainer :{
		justifyContent: 'center',
		alignItems: 'center',
		//flex:2,
//		margin: 20

	},

	TextInputStyle:{

		textAlign: 'center',
		height: 40,
		width: '90%',
		borderWidth: 1,
		//	marginTop: 10,
		borderColor: '#f2c468',
		borderRadius: 10
	},

	button: {

		width: '70%',
		height: 40,
		padding: 10,
		backgroundColor: '#fac863',
		borderRadius:7,
		marginTop: 10,
		elevation: 10
	},

	buttonText:{
		color:'#fff',
		textAlign:'center',
		fontFamily: 'Roboto'
	},

	text:{
		fontSize: 20,
		marginTop: 20,
		fontFamily: 'Roboto'
	}

});