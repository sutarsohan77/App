import React, { useState } from "react";

import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title: "1",
    description: "1",
    image: require("../assets/Sohan.jpeg"),
  },
  {
    id: 2,
    title: "1",
    description: "1",
    image: require("../assets/Sohan.jpeg"),
  },
  {
    id: 3,
    title: "1",
    description: "1",
    image: require("../assets/Sohan.jpeg"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    //Delete the message from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    // Call the server
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "1",
              description: "1",
              image: require("../assets/Sohan.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
