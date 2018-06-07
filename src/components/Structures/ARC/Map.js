import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

const Map = ({ navigation }) => {
		return(
			<View style={styles.container}>
				<View style={styles.levelContainer}>
				<IndicatorViewPager
                    style={{height:420}}
                    indicator={<PagerDotIndicator pageCount={5} />}>
                <View>
				<View style={styles.mapContainer}>
					<Text style={styles.levelText}>Level 1</Text>
					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot} onPress={() => navigation.navigate('HomeYay')}>
									<Text style={styles.slotText}>A1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C16</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
				</View>

				<View>
				<View style={styles.mapContainer}>
					<Text style={styles.levelText}>Level 2</Text>
					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C16</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
				</View>

				<View>
				<View style={styles.mapContainer}>
					<Text style={styles.levelText}>Level 3</Text>
					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C16</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
				</View>

				<View>
				<View style={styles.mapContainer}>
					<Text style={styles.levelText}>Level 4</Text>
					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C16</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
				</View>
				<View>
				<View style={styles.mapContainer}>
					<Text style={styles.levelText}>Level 5</Text>
					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>B16</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C1</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C2</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C4</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C5</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C7</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C8</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C10</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C11</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C12</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C13</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C14</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C15</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>C16</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
				</View>
				</IndicatorViewPager>
				</View>
			</View>
		);
}

const styles = StyleSheet.create({
	container: {
		padding: 10
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
	slotText: {
		color: 'white',
		fontSize: 15,
		textAlign: 'center'
	},
	levelText: {
		fontWeight: 'bold',
		fontSize: 15
	}
});

export default Map;