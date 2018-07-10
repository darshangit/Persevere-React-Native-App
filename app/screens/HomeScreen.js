import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

export class HomeScreenComponent extends Component {
  static navigationOptions = {
    header: null
  };

  onPress = () => {
    Alert.alert('Button Tapped');
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/mainpage.jpg')} />
        <View style={styles.subcontainer}>
          <View style={styles.mainRow}>
            <TouchableOpacity style={styles.buttonSplit} onPress={() => navigate('DayPlanScreen')}>
              <Text>DAY PLAN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSplit} onPress={() => navigate('DayReflectionScreen')}>
              <Text>DAY REFLECTION</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mainRow}>
            <TouchableOpacity style={styles.buttonSplit} onPress={() => navigate('MotiVidScreen')}>
              <Text>MOTIVATIONAL VID</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSplit} onPress={() => navigate('TrendingScreen')}>
              <Text>TRENDING</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subcontainer: {
    flex: 4,
    backgroundColor: 'lightgrey'
  },
  mainRow: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'red',
  },
  buttonSplit: {
    borderColor: 'red',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    backgroundColor: 'white'
  }
});
