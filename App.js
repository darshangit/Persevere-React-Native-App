import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { HomeScreenComponent } from "./app/screens/HomeScreen";
import DayPlanComponent from './app/screens/DayPlanScreen';
import DayReflectionComponent from './app/screens/DayReflectionScreen';
import TrendingComponent from './app/screens/TrendingScreen';
import MotivationalVidComponent from './app/screens/MotivationVidScreen';

const Routes = createStackNavigator({
  HomeScreen: {
    screen: HomeScreenComponent
  },
  DayPlanScreen: {
    screen: DayPlanComponent
  },
  DayReflectionScreen: {
    screen: DayReflectionComponent
  },
  MotiVidScreen: {
    screen: MotivationalVidComponent
  },
  TrendingScreen: {
    screen: TrendingComponent
  }
},
{
  initialRouteName: 'HomeScreen'
});

export default class App extends React.Component {
  render() {
    return (
      <Routes/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
