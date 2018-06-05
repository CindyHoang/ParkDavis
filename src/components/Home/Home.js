import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Home extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.title}>Where would you like to park today?</Text>
				</View>
				<View style={styles.buttonContainer}>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EB9532'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	buttonContainer: {
		backgroundColor: 'white',
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	title: {
		color: 'white',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	}
});