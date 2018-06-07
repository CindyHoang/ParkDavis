import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeSuccess extends Component {	
				render() {
			return(
			<View style={styles.container}>
			<StatusBar barStyle="light-content" />
				<View style={styles.logoContainer}>
					<Text style={styles.logo} onPress={() => this.props.navigation.navigate('HomeScreen')}>ParkDavis</Text>
				</View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>ARC</Text>
				</View>
				<View style={styles.contentContainer}>
				<View>
				<View style={styles.mapContainer}>
					<Text style={styles.levelText}>Level 4</Text>
					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>A16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>B16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.takenSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => this.props.navigation.navigate('HomeArc')}>
									<Text style={styles.slotText}>C16</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
				</View>
				<View style={styles.selectionContainer}>
					<TouchableOpacity style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Level 4 C10</Text>
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
		justifyContent: 'center',
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
		flexGrow: 1,
	},
	selectionContainer: {
		marginTop: 15,
		backgroundColor: '#EB9532',
		height: 160,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonContainer: {
		backgroundColor: 'white',
		width: 250,
		paddingVertical: 15,
		marginRight: 20,
		borderRadius: 20
	},
	buttonText: {
		textAlign: 'center',
		color: '#EB9532',
		fontSize: 30
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
	levelContainer: {
		flex: 1
	},
	mapContainer: {
		alignItems: 'center'
	},
	mapRowContainer: {
		marginBottom: 20
	},
	mapRowContainerNoBottom: {
		marginBottom: 0
	},
	mapRow: {
		flexDirection: 'row'
	},
	levelLabel: {
		justifyContent: 'center'
	},
	verticalSlot: {
		paddingVertical: 18,
		borderColor: 'white',
		borderWidth: 1,
		width: 35
	},
	horizontalSlot: {
		width: 60,
		borderColor: 'white',
		borderWidth: 1,
		justifyContent: 'center'
	},
	availableSlot: {
		backgroundColor: 'green'
	},
	unavailableSlot: {
		backgroundColor: 'red'
	},
	takenSlot: {
		backgroundColor: '#EB9532'
	},
	slotText: {
		color: 'white',
		fontSize: 15,
		textAlign: 'center'
	},
	levelText: {
		fontWeight: 'bold',
		fontSize: 15,
		marginTop: 10
	}
});
