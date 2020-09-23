import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TextInput,
} from "react-native";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";

import AppTextInput from "./app/components/AppTextInput";
import { Switch } from "react-native-gesture-handler";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="Category"
        icon="apps"
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
