import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Note extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.noteStyle}>
        <Text style={styles.noteText}>{this.props.val.title}</Text>
        <TouchableOpacity
          onPress={this.props.deleteNote}
          style={styles.deleteNoteStyle}
        >
          <Text style={styles.deleteNoteText}> X </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noteStyle: {
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
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "orange",
  },
  deleteNoteStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    padding: 7,
    top: 0,
    bottom: 0,
    right: 0,
  },
  deleteNoteText: {
    color: "white",
  },
});
