import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class Map extends Component {
	render() {
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
									<Text style={styles.slotText}>A17</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A18</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A19</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A20</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A21</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A22</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A23</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A24</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A25</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A26</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A27</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A28</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A29</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A30</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A31</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A32</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A33</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A34</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A35</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A36</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A37</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A38</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A39</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A40</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A41</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A42</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A43</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A44</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A45</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A46</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A47</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A48</Text>
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
									<Text style={styles.slotText}>A17</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A18</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A19</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A20</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A21</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A22</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A23</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A24</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A25</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A26</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A27</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A28</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A29</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A30</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A31</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A32</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A33</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A34</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A35</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A36</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A37</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A38</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A39</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A40</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A41</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A42</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A43</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A44</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A45</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A46</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A47</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A48</Text>
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
									<Text style={styles.slotText}>A17</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A18</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A19</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A20</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A21</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A22</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A23</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A24</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A25</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A26</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A27</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A28</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A29</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A30</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A31</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A32</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A33</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A34</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A35</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A36</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A37</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A38</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A39</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A40</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A41</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A42</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A43</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A44</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A45</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A46</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A47</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A48</Text>
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
									<Text style={styles.slotText}>A17</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A18</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A19</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A20</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A21</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A22</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A23</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A24</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A25</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A26</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A27</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A28</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A29</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A30</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A31</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A32</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A33</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A34</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A35</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A36</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A37</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A38</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A39</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A40</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A41</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A42</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A43</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A44</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A45</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A46</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A47</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A48</Text>
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
									<Text style={styles.slotText}>A17</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A18</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A19</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A20</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A21</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A22</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A23</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A24</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainer}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A25</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A26</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A27</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A28</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A29</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A30</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A31</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A32</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A33</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A34</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A35</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.unavailableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A36</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A37</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A38</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A39</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A40</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.mapRowContainerNoBottom}>
						<View style={styles.mapRow}>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A41</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A42</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A43</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A44</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A45</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A46</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A47</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.availableSlot}>
								<TouchableOpacity style={styles.verticalSlot}>
									<Text style={styles.slotText}>A48</Text>
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