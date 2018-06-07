import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import MuMap from './Map';
import { StackNavigator } from 'react-navigation';

export default class Mu extends Component {
	static navigationOptions = {
		title: 'Memorial Union'
	};
	render() {
		return(
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<View style={styles.logoContainer}>
					<View style={styles.leftContainer}>
						<Text style={styles.logoback} onPress={() => this.props.navigation.navigate('HomeScreen')}>Back</Text>
					</View>
					<Text style={styles.logo} onPress={() => this.props.navigation.navigate('HomeScreen')}>ParkDavis</Text>
					<View style={styles.rightContainer}></View>
				</View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Memorial Union</Text>
				</View>
				<View style={styles.contentContainer}>
					<MuMap navigation={this.props.navigation}/>
				</View>
				<View style={styles.selectionContainer}>
					<Text style={styles.selectionTitle}>Please select your spot</Text>
					<Text style={styles.selectionSubtitle}>Nearby spots available:</Text>

					<View style={styles.spotContainer}>
						<ScrollView horizontal={true}>
							<TouchableOpacity style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Spot 1</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Spot 2</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Spot 3</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Spot 1</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Spot 2</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Spot 3</Text>
							</TouchableOpacity>
						</ScrollView>
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
		justifyContent: 'space-between',
		padding: 25,
		flexDirection: 'row',
		alignItems: 'center'
	},
	titleContainer: {
		backgroundColor: 'white',
		padding: 20,
	},
	contentContainer: {
		backgroundColor: 'rgba(235,149,50,0.2)',
		flexGrow: 1
	},
	selectionContainer: {
		backgroundColor: '#EB9532',
		height: 160,
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
		fontSize: 20,
		fontWeight: 'bold'
	},
	logoback: {
		color: 'white',
		textAlign: 'left',
		fontSize: 15,
		fontWeight: 'bold'
	},
	title: {
		color: '#EB9532',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	},
	selectionTitle: {
		color: 'white',
		fontSize: 20,
		marginBottom: 10,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	selectionSubtitle: {
		color: 'white',
		fontSize: 15,
		marginBottom: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#EB9532'
	},
	leftContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	rightContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}
});