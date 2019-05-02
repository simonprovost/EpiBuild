import {Alert, AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Button} from 'react-native';
import React, {Component} from 'react';
import { material } from 'react-native-typography';
import '../global';


export class Settings extends Component {
	constructor() {
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
			if (this.state.textInputDataLogin !== '') {
				await AsyncStorage.setItem('KeyLogin', this.state.textInputDataLogin);
				global.userName = this.state.textInputDataLogin;
			}
			if (this.state.textInputNameProject !== '') {
				await AsyncStorage.setItem('KeyNameProject', this.state.textInputNameProject);
				global.projectName = this.state.textInputNameProject;
			}
			if (this.state.textInputBinaryname !== '') {
				await AsyncStorage.setItem('KeyBinaryName', this.state.textInputBinaryname);
				global.binaryName = this.state.textInputBinaryname;
			}
			if (this.state.textInputBranchName !== '') {
				await AsyncStorage.setItem('KeyBranchName', this.state.textInputBranchName);
				global.branchName = this.state.textInputBranchName;
			}
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
			<ScrollView style={{flex: 1}}>
				<View style={{marginLeft: 10, marginBottom: 10, marginTop: 15}}>
                    <Text style={styles.title}>Login Name</Text>
				</View>
				<View style={{
                    flexDirection:'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    alignContent: 'center'
                }}>
					<View style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        width: '50%',
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
						// alignContent: 'center',
						// alignItems: 'center',
                        // alignSelf: 'center',
                        width: '30%',
					}}>
						<Text style={{color:'#D3D3D3', fontSize:16, fontStyle: 'italic', fontFamily: 'Roboto'}}>@epitech.eu</Text>
					</View>
				</View>

				<View style={styles.MainContainer}>

					<Button onPress={
						async () => {
							try {
								this.setState({textInputDataLogin : ''});
								this.setState({storageValueLogin : ''});
								await AsyncStorage.removeItem('KeyLogin');
							} catch (error) {
								Alert.alert("Value that you need to remove is an Error. KeyLogin.");
							}
						}
					} title='Reset Login' style={styles.button} >
					</Button>
				</View>

				<View style={{marginLeft: 10, marginBottom: 10, marginTop: 15}}>
					<Text style={styles.title}>Project Name</Text>
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
					<Button onPress={
						async () => {
							try {
								await AsyncStorage.removeItem('KeyNameProject');
								this.setState({textInputNameProject : ''});
								this.setState({storageValueNameProject : ''})
							} catch (error) {
								Alert.alert("Value that you need to remove is an Error. KeyNameProject.");
							}
						}
					} title='Reset Project Name' style={styles.button} >
					</Button>
				</View>


				<View style={{marginLeft: 10, marginBottom: 10, marginTop: 15}}>
					<Text style={styles.title}>Binary Name</Text>
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
					<Button onPress={
						async () => {
							try {
								await AsyncStorage.removeItem('KeyBinaryName');
								this.setState({textInputBinaryname : ''});
								this.setState({storageValueBinaryname : ''})
							} catch (error) {
								Alert.alert("Value that you need to remove is an Error. KeyBinaryName.");
							}
						}
					} title='Reset Binary Name' style={styles.button} >
					</Button>
				</View>


				<View style={{marginLeft: 10, marginBottom: 10, marginTop: 15}}>
					<Text style={styles.title}>Branch Name</Text>
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
					<Button onPress={
						async () => {
							try {
								await AsyncStorage.removeItem('KeyBranchName');
								this.setState({textInputBranchName : ''});
								this.setState({storageValueBranchName : ''})
							} catch (error) {
								Alert.alert("Value that you need to remove is an Error. KeyBranchName.");
							}
						}
					} title='Reset Branch Name' style={styles.button} >
					</Button>
				</View>


				<View style = {{
                    backgroundColor: 'grey',
					borderWidth: 0.3,
					borderColor: 'grey',
					margin: 15,
					shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,
				}} />

				<View style={{
					justifyContent: 'center',
					alignItems: 'center',
                    flex: 0.5,
                    marginBottom: 25,
				}}>
					<Button onPress={this.setValueLocally} title='Save' style={styles.button} >
					</Button>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({

	MainContainer :{
		justifyContent: 'center',
        alignItems: 'center',
	},

	TextInputStyle:{
        padding: 5,
		borderWidth: 1,
        borderColor: '#f2c468',
        marginBottom: 10,
	},

	button: {
		width: '70%',
		padding: 6,
		marginTop: 40,
	},

	buttonText:{
		color:'#fff',
		textAlign:'center',
		fontFamily: 'Roboto',
	},

	text:{
		fontSize: 20,
		marginTop: 20,
		fontFamily: 'Roboto',
    },

    title: {
        color: '#404040',
        fontSize: 20,
    }

});