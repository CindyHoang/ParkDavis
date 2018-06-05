import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = { timer: 0 };
		setInterval(() => {
			this.setState({ timer: this.state.timer + 1 })
		}, 1000);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.title}>ParkDavis</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		 backgroundColor: '#EB9532',
		 flex: 1,
		 justifyContent: 'center',
		 alignItems: 'center' 
	},
	title: {
		color: 'white',
		fontSize: 35,
		fontWeight: 'bold'
	},
	subtitle: {
		color: 'white',
		fontWeight: '200'
	}
});