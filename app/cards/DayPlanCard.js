import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from 'react-native-cards';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CheckBox from 'react-native-check-box'
class DayPlanCard extends Component {
  state = {
    showTimePicker: false,
    time: null
  };

  timePickerHide = () => {
    this.setState({ showTimePicker: false });
  };

  timePickerShow = () => {
    this.setState({ showTimePicker: true });
  };

  timePicked = (time) => {
    this.setState({
      time: time,
      showTimePicker: false
    });
  };

  formatTime = time => {
    const parsed = moment(new Date(time));
    return parsed.format('LT');
  };

  render() {
    return (
      <View>
        <Card>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>

          <CardTitle subtitle="Description" />
          <CheckBox style={{padding: 10}}
    onClick={()=> console.log('asdsad')}
/>;
            </View>
          <CardContent>
           <TextInput/>
          </CardContent>
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={this.timePickerShow}
              title="Pick Time"
              color="#FEB557"
            />
            <DateTimePicker
              isVisible={this.state.showTimePicker}
              onConfirm={(time) => this.timePicked(time)}
              onCancel={this.timePickerHide}
              mode={'time'}
            />
            console.log(this.state.time);
            
            <Text>{this.state.time !== null ? this.formatTime(this.state.time) : ''}</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <CardButton onPress={() => {}} title="Delete" color="#FEB557" />
            </View>
          </CardAction>
        </Card>
      </View>
    );
  }
}

export default DayPlanCard;
