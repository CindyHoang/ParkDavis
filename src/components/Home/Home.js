import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.title}>Where would you like to park today?</Text>
				</View>
				<View style={styles.contentContainer}>
					<TouchableOpacity style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Mu</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Arc</Text>
					</TouchableOpacity>
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
	contentContainer: {
		backgroundColor: 'white',
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	buttonContainer: {
		borderRadius: 10,
		borderColor: '#EB9532',
		borderWidth: 3,
		height: 200,
		width: 300,
		margin: 20,
		padding: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#EB9532',
		fontWeight: '700',
		fontSize: 30
	},
	title: {
		color: 'white',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	}
});