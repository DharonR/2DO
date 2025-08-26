import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PlaceholderTracker({ title, goBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Button title="Back" onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
