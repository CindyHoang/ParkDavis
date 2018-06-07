import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
export default class Splash extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Image
					style={styles.logo}
					source={require('./src/images/car.png')}/>
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
	},
	logo: {
		width: 100,
		height: 100
	},
});