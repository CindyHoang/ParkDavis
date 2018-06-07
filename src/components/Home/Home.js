import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
export default class Home extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.title}>Where would you like to park today?</Text>
				</View>
				<View style={styles.contentContainer}>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('MuScreen')}
						style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Mu</Text>
						<View style={styles.informationContainer}>
							<Text style={styles.informationText1}>70%</Text>
							<Text style={styles.informationText1}>Full</Text>
							<Text style={styles.informationText2}>300 Available Parking Spaces</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('ArcScreen')}
						style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Arc</Text>
						<View style={styles.informationContainer}>
							<Text style={styles.informationText1}>60%</Text>
							<Text style={styles.informationText1}>Full</Text>
							<Text style={styles.informationText2}>400 Available Parking Spaces</Text>
						</View>
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
		borderWidth: 2,
		height: 200,
		width: 300,
		margin: 20,
		paddingTop: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#000000',
		fontWeight: '600',
		fontSize: 30
	},
	title: {
		color: 'white',
		textAlign: 'center',
		fontSize: 22,
		fontWeight: 'bold'
	},
	informationContainer: {
		backgroundColor: '#EB9532',
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	informationText1: {
		textAlign: 'center',
		color: '#ffffff',
		fontWeight: '700',
		fontSize: 30
	},
	informationText2: {
		textAlign: 'center',
		//height: 50,
		color: '#ffffff',
		fontWeight: '700',
		fontSize: 20,
		marginTop: 20
	}
});
