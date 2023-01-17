import React from "react";
import { StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";
import { Component } from "react";

export default class remindersClass extends Component {
  state = {
    crd: styles.completed,
    ucrd: styles.reminder,
    cmpltd : styles.reminder
  }
  render() {
    return (
      <View key={this.props.keyval} style={styles.reminderStyle}>
        
          <Text style={this.state.cmpltd}>{this.props.val.title}</Text>
          <Text style={this.state.cmpltd}>{this.props.val.schedule}</Text>
        
        

        <TouchableOpacity
          onPress={this.completeReminder.bind(this)}
          style={styles.completeReminderStyle}
        >
          <Text style={styles.completeReminderText}> X </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.deleteReminder}
          style={styles.deleteReminderStyle}
        >
          <Text style={styles.deleteReminderText}> D </Text>
        </TouchableOpacity>
      </View>
    );
  }
  completeReminder() {
    this.setState({cmpltd: this.state.crd});
  }  
}

const styles = StyleSheet.create({
  reminderStyle: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 5,
    borderBottomColor: "#ddd",
    borderRightWidth: 5,
    borderRightColor: "#ddd",
    borderLeftWidth: 5,
    borderLeftColor: "#ddd",
  },
  reminder: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "orange",
  },
  completed: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "orange",
    textDecorationLine: 'line-through',
  },
  deleteReminderStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    padding: 15,
    top: 15,
    bottom: 15,
    right: 65,
  },
  completeReminderStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    padding: 15,
    top: 15,
    bottom: 15,
    right: 15,
  },
  deleteReminderText: {
    color: "white",
  },
  completeReminderText: {
    color: "white",
  },
});
