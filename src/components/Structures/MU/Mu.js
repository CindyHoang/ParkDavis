import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Mu extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.logo}>ParkDavis</Text>
				</View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Memorial Union</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center'
	},
	logoContainer: {
		backgroundColor: '#EB9532',
		padding: 20
	},
	titleContainer: {
		backgroundColor: 'white',
		padding: 20,
	},
	contentContainer: {
	},
	logo: {
		color: 'white',
		textAlign: 'center',
		fontSize: 20
	},
	title: {
		color: '#EB9532',
		textAlign: 'center',
		fontSize: 20
	},
});