import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

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
				<View style={styles.contentContainer}>
				</View>
				<View style={styles.selectionContainer}>
					<Text style={styles.selectionTitle}>Please select your spot</Text>
					<Text style={styles.selectionSubtitle}>Nearby spots available:</Text>

					<View style={styles.spotContainer}>
						<TouchableOpacity style={styles.buttonContainer}>
							<Text style={styles.buttonText}>Spot 1</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonContainer}>
							<Text style={styles.buttonText}>Spot 2</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonContainer}>
							<Text style={styles.buttonText}>Spot 3</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		height: 450
	},
	selectionContainer: {
		backgroundColor: '#EB9532',
		flexGrow: 1,
		padding: 20,
	},
	spotContainer: {
		flexDirection: 'row'
	},
	buttonContainer: {
		backgroundColor: 'white',
		width: 100,
		paddingVertical: 15,
		marginRight: 20,
		borderRadius: 20
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
	selectionTitle: {
		color: 'white',
		fontSize: 20,
		marginBottom: 10
	},
	selectionSubtitle: {
		color: 'white',
		fontSize: 18,
		marginBottom: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#EB9532'
	}
});