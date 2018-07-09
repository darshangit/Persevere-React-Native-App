import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { HomeScreenComponent } from "./app/screens/HomeScreen";
const Routes = createStackNavigator({
  HomeScreen: {
    screen: HomeScreenComponent
  },
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
