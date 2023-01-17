import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Component, useState } from "react";
import Reminder from "../app/components/Reminder";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class remindersClass extends Component {
  state = {
    reminderArray: [
      {
        title: "First reminder",
        schedule: "25/12/2022  @  12:00",
        completed: false,
      },
    ],
    reminderTitle: "",
    rDate: new Date(),
    reminderDate:
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear() +
      " @ " +
      new Date().getHours() +
      ":" +
      new Date().getMinutes(),

    isDatePickerVisible: false,
  };

  render() {
    let remindersList = this.state.reminderArray.map((val, key) => {
      return (
        <Reminder
          key={key}
          keyval={key}
          val={val}
          deleteReminder={() => this.deleteReminder(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
        <View style={styles.header}>
          <Text style={styles.headerText}>REMINDERS</Text>
        </View>
        
        <ScrollView style={styles.reminderList} keyboardDismissMode={"on-drag"}>
          {remindersList}
        </ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.addReminder.bind(this)}
            style={styles.newReminderButton}
          >
            <Text style={styles.plusButton}>+</Text>
          </TouchableOpacity>
          <View style={styles.reminderBar}>
            <TextInput
              style={styles.reminderText}
              onChangeText={(reminderTitle) => this.setState({ reminderTitle })}
              value={this.state.reminderTitle}
              placeholder="Add Reminder"
              placeholderTextColor="white"
            ></TextInput>
            <View style={styles.datePicker}>
              <Text
                style={styles.textInput}
              >
                {this.state.reminderDate}
              </Text>
              <Button
                style={styles.selectDate}
                onPress={this.showDateTimePicker.bind(this)}
                title="Set Date"
              />
              <DateTimePickerModal
                isVisible={this.state.isDatePickerVisible}
                date={this.state.rDate}
                mode="datetime"
                onConfirm={this.handleConfirm.bind(this)}
                onCancel={this.hideDateTimePicker.bind(this)}
              />
            </View>
          </View>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
  showDateTimePicker() {
    this.setState({ isDatePickerVisible: true });
  }
  hideDateTimePicker() {
    this.setState({ isDatePickerVisible: false });
  }

  addReminder() {
    if (this.state.reminderTitle) {
      this.state.reminderArray.push({
        title: this.state.reminderTitle,
        schedule: this.state.reminderDate,
      });
      this.setState({ reminderArray: this.state.reminderArray });
      this.setState({ reminderTitle: "" });
      this.setState({
        reminderDate:
          new Date().getDate() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getFullYear() +
          " @ " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes(),
      });
    }
  }
  handleConfirm = (date) => {
    this.setState({ rDate: this.date });
    let reminderDateNew =
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " @ " +
      date.getHours() +
      ":" +
      date.getMinutes();
    this.setState({ reminderDate: reminderDateNew });
    this.hideDateTimePicker();
  };
  deleteReminder(key) {
    this.state.reminderArray.splice(key, 1);
    this.setState({ reminderArray: this.state.reminderArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 25,
    paddingTop: 60,
  },
  reminderContainer: {
    padding: 100,
  },
  reminderList: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'relative',
    alignItems: "center",
    bottom: 10,
    left: 0,
    right: 0,
  },
  newReminderButton: {
    backgroundColor: "gray",
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    elevation: 11,
    marginBottom: -40,
    zIndex: 11,
  },
  plusButton: {
    color: "white",
    fontSize: 24,
    zIndex: 10,
  },
  reminderText: {
    alignSelf: "stretch",
    color: "#fff",
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "black",
    width: "50%",
    textAlign: "center",
    fontSize: 15,
  },
  reminderBar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: 70,
    
    
  },
  datePicker: {
    borderTopColor: "black",
    borderColor: "black",
    zIndex: 10,
    width: "50%",
    alignItems: "center",
    backgroundColor: "#252525",
    paddingLeft: 10,
  },
  dateText: {
    alignSelf: "stretch",
    color: "#fff",
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
    marginTop: 9,
    marginRight: -32,
    padding: 5,
    height: 30,
    width: "80%",
    backgroundColor: "white",
    textAlign: "center",
    alignContent: "center",
    right: 1,
    fontSize: 14,
  },
  datetimepickerstyle: {},
});
