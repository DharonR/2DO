import React from "react";
import { View, Button, StyleSheet } from "react-native";
import RemindersPage from "../screens/RemindersPage";

export default function RemindersTracker({ goBack }) {
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={goBack} />
      <RemindersPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
