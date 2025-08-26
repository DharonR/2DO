import React from "react";
import { ScrollView, View, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigate }) {
  const trackers = [
    { key: "Reminders", label: "Reminders" },
    { key: "Budget", label: "Budget Tracker" },
    { key: "Expense", label: "Expense Tracker" },
    { key: "Habit", label: "Habit Tracker" },
    { key: "Career", label: "Career Tracker" },
    { key: "Goals", label: "Goals Tracker" },
    { key: "Car", label: "Car Tracker" },
    { key: "Home", label: "Home Tracker" },
    { key: "Project", label: "Project Tracker" },
    { key: "School", label: "School Tracker" },
    { key: "Workout", label: "Workout Tracker" },
    { key: "Affirmation", label: "Daily Affirmations" },
    { key: "Weight", label: "Weight Tracker" }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {trackers.map((t) => (
        <View key={t.key} style={styles.button}>
          <Button title={t.label} onPress={() => navigate(t.key)} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
});
