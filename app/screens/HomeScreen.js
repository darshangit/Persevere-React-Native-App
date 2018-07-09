import React, { Component } from 'react';
import {  View, Text, Image , StyleSheet } from 'react-native';

export class HomeScreenComponent extends Component {
  render() {
    return (
      <View>
        <Image source={require('../assets/mainpage.jpg')}/>
      </View>
    );
  }
}
