import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import Note from "../app/components/Note";

export default class NotesPage extends Component {
  state = {
    noteArray: [
      {
        title: "First note",
      },
    ],
    noteText: "",
  };

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note key={key} keyval={key} val={val} deleteNote={() => this.deleteNote(key)} />
      );
    });

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <ScrollView style={styles.noteList} keyboardDismissMode="on-drag">
            {notes}
          </ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.footer}>
              <TouchableOpacity
                onPress={this.addNote.bind(this)}
                style={styles.newNoteButton}
              >
                <Text style={styles.plusButton}>+</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.noteTextInput}
                onChangeText={(noteText) => this.setState({ noteText })}
                value={this.state.noteText}
                placeholder="Add Note"
                placeholderTextColor="white"
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
      this.state.noteArray.push({ title: this.state.noteText });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteList: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "relative",
    alignItems: "center",
    bottom: 10,
    left: 0,
    right: 0,
  },
  newNoteButton: {
    backgroundColor: "gray",
    width: 90,
    height: 90,
    borderRadius: 50,
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
  noteTextInput: {
    alignSelf: "stretch",
    color: "#fff",
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "black",
    width: "100%",
    textAlign: "center",
    fontSize: 15,
  },
});
