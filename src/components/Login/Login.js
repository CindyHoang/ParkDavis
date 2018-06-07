import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {
	static navigationOptions = {
		title: 'Login'
	};
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>

					<Text style={styles.title}>ParkDavis</Text>
				</View>
				<View style={styles.formContainer}>
					<LoginForm navigation={this.props.navigation}/>
				</View>
			</KeyboardAvoidingView>
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
	formContainer: {
		backgroundColor: 'white'
	},
	logo: {
		width: 100,
		height: 100
	},
	title: {
		color: 'white',
		fontSize: 35,
		fontWeight: 'bold',
		marginTop: 10,
		textAlign: 'center',
	}
});