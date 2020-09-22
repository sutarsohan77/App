import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import Card from "./app/components/Card";
import DemoScreen from "./app/screens/DemoScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <MessagesScreen />;
}
