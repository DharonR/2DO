import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import RemindersPage from "./RemindersPage";
import NotesPage from "./NotesPage";

export default function LifeOS() {
  const [tab, setTab] = useState("reminders");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LifeOS</Text>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, tab === "reminders" && styles.activeTab]}
          onPress={() => setTab("reminders")}
        >
          <Text style={styles.tabText}>Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, tab === "notes" && styles.activeTab]}
          onPress={() => setTab("notes")}
        >
          <Text style={styles.tabText}>Notes</Text>
        </TouchableOpacity>
      </View>
      {tab === "reminders" ? <RemindersPage /> : <NotesPage />}
    </View>
  );
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
    fontSize: 38,
    padding: 15,
    paddingTop: 30,
    fontFamily: "monospace",
  },
  tabBar: {
    flexDirection: "row",
  },
  tabButton: {
    flex: 1,
    padding: 10,
    backgroundColor: "gray",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "orange",
  },
  tabText: {
    color: "white",
    fontSize: 16,
  },
});
