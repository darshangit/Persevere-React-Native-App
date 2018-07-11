import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import  DayPlanCard  from "../cards/DayPlanCard";


export default class DayPlanComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            console.log('hi');
          }}
        />
        <ScrollView>
          <DayPlanCard/>
        </ScrollView>
      </View>
    );
  }
}

