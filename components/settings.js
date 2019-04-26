import {Alert, AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import { material } from 'react-native-typography';
import '../global';


export class Settings extends Component {
	constructor()
	{
		super();

		this.state={

			textInputDataLogin : '',
			storageValueLogin : '',

			textInputNameProject : '',
			storageValueNameProject : '',

			textInputBinaryname : '',
			storageValueBinaryname: '',

			textInputBranchName : '',
			storageValueBranchName: '',

		}
	}

	setValueLocally = async () => {
		try {
			await AsyncStorage.setItem('KeyLogin', this.state.textInputDataLogin);
			await AsyncStorage.setItem('KeyNameProject', this.state.textInputNameProject);
			await AsyncStorage.setItem('KeyBinaryName', this.state.textInputBinaryname);
			await AsyncStorage.setItem('KeyBranchName', this.state.textInputBranchName);
			global.userName = this.state.textInputDataLogin;
			global.projectName = this.state.textInputNameProject;
			global.branchName = this.state.textInputBranchName;
			global.binaryName = this.state.textInputBinaryname;
			Alert.alert("Value Stored Successfully.",
				`Login: ` + this.state.textInputDataLogin+ `\nNameProject: ` + this.state.textInputNameProject
			+ `\n Binary Name: ` + this.state.textInputBinaryname + `\n Branch Name: ` + this.state.textInputBranchName);
		} catch (error) {
			Alert.alert("Value Stored Unsuccessfully.",
				`Login: ` + this.state.textInputDataLogin+ `\nNameProject: ` + this.state.textInputNameProject
			+ `\n Binary Name: ` + this.state.textInputBinaryname + `\n Branch Name: ` + this.state.textInputBranchName);
		}
	};

	componentDidMount = async () => {
		const lastLogin = await AsyncStorage.getItem("KeyLogin");
		if (lastLogin) {
			this.setState({ storageValueLogin: lastLogin });
		}

		const lastNameProject = await AsyncStorage.getItem("KeyNameProject");
		if (lastLogin) {
			this.setState({ storageValueNameProject: lastNameProject });
		}

		const lastBinaryName = await AsyncStorage.getItem("KeyBinaryName");
		if (lastLogin) {
			this.setState({ storageValueBinaryname: lastBinaryName });
		}

		const lastBranchName = await AsyncStorage.getItem("KeyBranchName");
		if (lastLogin) {
			this.setState({ storageValueBranchName: lastBranchName });
		}
		global.userName = this.state.storageValueLogin;
		global.projectName = this.state.storageValueNameProject;
		global.branchName = this.state.storageValueBranchName;
		global.binaryName = this.state.storageValueBinaryname;
	};

	render() {

		return (
			<React.Fragment>

				<View style={{alignItems: 'stretch', marginLeft: 10, marginBottom: 10, marginTop: 20}}>
					<Text style={material.headline}>Login Name</Text>
				</View>
				<View style={{flexDirection:'row', alignItems: 'center', alignSelf: 'center', alignContent: 'center'}}>
					<View style={{
						width:300,
					}}>

						<TextInput
							autoCapitalize = 'none'
							returnKeyType={"next"}
							onSubmitEditing={() => { this.textInputNameProject.focus(); }}
							autoFocus={true}
							placeholder={this.state.storageValueLogin || "lucas.mayol"}
							onChangeText={ data => {
                                this.setState({textInputDataLogin : data});
                            }}
							underlineColorAndroid='transparent'
							style={styles.TextInputStyle}
							value={this.state.textInputDataLogin}
						/>
					</View>
					<View style={{
						alignContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
					}}>
						<Text style={{color:'#D3D3D3', fontSize:16, fontStyle: 'italic', fontFamily: 'Roboto'}}>@epitech.eu</Text>
					</View>
				</View>

				<View style={styles.MainContainer}>

					<TouchableOpacity onPress={
						async () => {
							try {
								this.setState({textInputDataLogin : ''});
								this.setState({storageValueLogin : ''});
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
						ref={(input) => { this.textInputNameProject = input; }}
						onSubmitEditing={() => { this.textInputBinaryname.focus(); }}
						placeholder={this.state.storageValueNameProject || "CPE_corewar_2017"}
                        onChangeText={ data => {
                            this.setState({textInputNameProject : data});
                        }}
						underlineColorAndroid='transparent'
						style={styles.TextInputStyle}
						value={this.state.textInputNameProject}
					/>
					<TouchableOpacity onPress={
						async () => {
							try {
								await AsyncStorage.removeItem('KeyNameProject');
								this.setState({textInputNameProject : ''});
								this.setState({storageValueNameProject : ''})
							} catch (error) {
								Alert.alert("Value that you need to remove is an Error. KeyNameProject.");
							}
						}
					} activeOpacity={0.7} style={styles.button} >
						<Text style={styles.buttonText}> Reset name project </Text>
					</TouchableOpacity>
				</View>


				<View style={{alignItems: 'stretch', marginLeft: 10, marginBottom: 10, marginTop: 25}}>
					<Text style={material.headline}>Binary Name</Text>
				</View>

				<View style={styles.MainContainer}>
					<TextInput
						returnKeyType={"next"}
						autoFocus={true}
						onSubmitEditing={() => { this.textInputBranchName.focus(); }}
						ref={(input) => { this.textInputBinaryname = input; }}
						placeholder={this.state.storageValueBinaryname || "corewar"}
						onChangeText={ data => {
                            this.setState({textInputBinaryname : data});
                        }}
						underlineColorAndroid='transparent'
						style={styles.TextInputStyle}
						value={this.state.textInputBinaryname}
					/>
					<TouchableOpacity onPress={
						async () => {
							try {
								await AsyncStorage.removeItem('KeyBinaryName');
								this.setState({textInputBinaryname : ''});
								this.setState({storageValueBinaryname : ''})
							} catch (error) {
								Alert.alert("Value that you need to remove is an Error. KeyBinaryName.");
							}
						}
					} activeOpacity={0.7} style={styles.button} >
						<Text style={styles.buttonText}> Reset Binary Name </Text>
					</TouchableOpacity>
				</View>


				<View style={{alignItems: 'stretch', marginLeft: 10, marginBottom: 10, marginTop: 25}}>
					<Text style={material.headline}>Branch Name</Text>
				</View>

				<View style={styles.MainContainer}>
					<TextInput
						returnKeyType={"done"}
						autoCapitalize = 'none'
						autoFocus={true}
						ref={(input) => { this.textInputBranchName = input; }}
						placeholder={this.state.storageValueBranchName || "master"}
                        onChangeText={ data => {
                            this.setState({textInputBranchName : data});
                        }}
						underlineColorAndroid='transparent'
						style={styles.TextInputStyle}
						value={this.state.textInputBranchName}
					/>
					<TouchableOpacity onPress={
						async () => {
							try {
								await AsyncStorage.removeItem('KeyBranchName');
								this.setState({textInputBranchName : ''});
								this.setState({storageValueBranchName : ''})
							} catch (error) {
								Alert.alert("Value that you need to remove is an Error. KeyBranchName.");
							}
						}
					} activeOpacity={0.7} style={styles.button} >
						<Text style={styles.buttonText}> Reset Binary Name </Text>
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
	},

	TextInputStyle:{

		textAlign: 'center',
		height: 40,
		width: '90%',
		borderWidth: 1,
		borderColor: '#f2c468',
		borderRadius: 10,
	},

	button: {

		width: '70%',
		height: 40,
		padding: 10,
		backgroundColor: '#fac863',
		borderRadius:7,
		marginTop:10,
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