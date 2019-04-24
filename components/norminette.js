import {Button, Text, TouchableOpacity, View} from "react-native";
import {sendServerInformation} from "../App"
import React, { Component } from 'react';
import {OutputRenderer} from "./OutputRenderer";

export class Norminette extends Component {
	constructor () {
		super();

		this.state = {
			output: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae velit suscipit, lacinia ipsum eget, aliquam urna. Fusce eget molestie leo, scelerisque dignissim eros. Praesent pellentesque diam ac justo dictum, tempor posuere est ornare. Curabitur sit amet semper nisl, sed hendrerit arcu. Mauris laoreet vehicula congue. Pellentesque id sollicitudin tellus, eget ullamcorper augue. Sed nunc est, feugiat vel ipsum ac, posuere ullamcorper urna.\n\n\n Proin feugiat urna id libero molestie, et dapibus dui dapibus. Curabitur ac eros ut metus vestibulum faucibus vestibulum at nisi. Mauris gravida mauris eu neque accumsan imperdiet. Praesent pharetra orci non imperdiet volutpat. Morbi massa justo, suscipit sed nisi sit amet, placerat finibus enim. Phasellus vel porttitor orci, non ultrices felis. Duis semper tortor quis pulvinar molestie. Curabitur vel imperdiet nisi. Etiam odio massa, mollis non iaculis ut, aliquam vitae sem. Cras a interdum risus, sit amet faucibus elit. Donec vehicula pretium erat vitae volutpat. Donec porta libero ac mi eleifend pretium. Vivamus mattis non sem vitae tristique. Etiam ut est convallis, tincidunt tellus vel, aliquet odio. Morbi mattis eu nibh ac sagittis.',
		}
	}

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

		return (
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
					>
						<Text style={{color: '#FFFFFF'}}>Run</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}