import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

const LoginForm = ({ navigation }) => {
		return(
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<TextInput
					placeholder="email"
					placeholderTextColor="rgba(255,255,255,0.7)"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					style={styles.input} />
				<TextInput
					placeholder="password"
					placeholderTextColor="rgba(255,255,255,0.7)"
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					ref={(input) => this.passwordInput = input}
					/>

				<TouchableOpacity
					onPress={() => navigation.navigate('HomeScreen')}
					style={styles.buttonContainer}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>

				<Text onPress={() => navigation.navigate('HomeScreen')} style={styles.reg}>SIGN UP</Text>
			</View>
		);
}

const styles = StyleSheet.create({
	container: {
		padding: 30
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(235,149,50,0.5)',
		marginBottom: 10,
		color: 'white',
		paddingHorizontal: 10,
		borderRadius: 10
	},
	buttonContainer: {
		backgroundColor: 'rgba(235,149,50,1)',
		paddingVertical: 15,
		borderRadius: 10,
		marginBottom: 10
	},
	buttonText: {
		textAlign: 'center',
		color: 'white',
		fontWeight: '700'
	},
	reg: {
		color: '#EB9532',
		textAlign: 'center',
		fontWeight: 'bold'
	}
});

export default LoginForm;