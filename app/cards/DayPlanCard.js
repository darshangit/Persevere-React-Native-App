import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
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
import CheckBox from 'react-native-check-box';

class DayPlanCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showTimePicker: false,
      time: null,
      checked: false
    };
  }

  timePickerHide = () => {
    this.setState({ showTimePicker: false });
  };

  timePickerShow = () => {
    this.setState({ showTimePicker: true });
  };

  timePicked = time => {
    this.setState({
      time: time,
      showTimePicker: false
    });
  };

  formatTime = time => {
    const parsed = moment(new Date(time));
    return parsed.format('LT');
  };

  deleteCard = () => {
    console.log('this.props', this.props.id)

    console.log('deletecard')
    Alert.alert(
      'Are you sure to delete the card?',null,[
        {text: 'No' , onPress: () => console.log('Cancel'), style: 'cancel'},
        {text: 'Yes' , onPress: () => {
          this.props.dayCards.pop()
          this.props.parent.setState({
            dayCards: this.props.dayCards
          })
        }
      }
      ]
    )

  }

  toggleCheckBox = () => {
    this.state.checked = this.state.checked ? false : true
    this.setState({
      checked: this.state.checked
    })
  }

  render() {
    return (
      <View>
        <Card style={[this.state.checked ? styles.checkedStyle : '']}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}
          >
            <CardContent>
            <TextInput multiline = {true} placeholder="Add Task"/>
          </CardContent>
            <CheckBox
              isChecked={this.state.checked}
              style={{ padding: 10 }}
              onClick={() => this.toggleCheckBox()}
            />;
          </View>
          
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={this.timePickerShow}
              title="Pick Time"
              color="#FEB557"
            />
            <DateTimePicker
              isVisible={this.state.showTimePicker}
              onConfirm={time => this.timePicked(time)}
              onCancel={this.timePickerHide}
              mode={'time'}
            />
            console.log(this.state.time);
            <Text>
              {this.state.time !== null ? this.formatTime(this.state.time) : ''}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end'
              }}
            >
              <CardButton onPress={() => {this.deleteCard()}} title="Delete" color="#FEB557" />
            </View>
          </CardAction>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  checkedStyle: {
    backgroundColor: '#D7545F'
  }
});

export default DayPlanCard;
