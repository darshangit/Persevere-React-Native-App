import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import DayPlanCard from '../cards/DayPlanCard';

export default class DayPlanComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayCards: [1],
      parent: this
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            this.state.dayCards.push(this.state.dayCards.length * 7)
            this.setState({
              dayCards: this.state.dayCards
            })
          }}
        />

        <View>
          <ScrollView>
            {/* <FlatList
            data={this.state.dayCards}
            renderItem={({item}) => (
              <DayPlanCard/>
            )}
            /> */}
            {
              this.state.dayCards.map((item, key) => (
                <DayPlanCard key={item} {...this.state}/>
              ))
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}
