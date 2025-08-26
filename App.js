import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import trackers from "./trackers";

export default function App() {
  const [current, setCurrent] = useState("Home");

  if (current === "Home") {
    return <HomeScreen navigate={setCurrent} />;
  }

  const TrackerComponent = trackers[current];
  return <TrackerComponent goBack={() => setCurrent("Home")} />;
}
