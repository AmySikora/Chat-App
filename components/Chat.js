import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Chat = ({ route, navigation }) => {
  const { name, background } = route.params; // Destructure the name and background color from Start.js

  useEffect(() => {
    // Set the navigation bar title to the user's name
    navigation.setOptions({ title: name });
  }, [name, navigation]);

  // Check if the background color is dark or light to adjust the text color
  const textColor = ["#090C08", "#474056"].includes(background)
    ? "#FFFFFF"
    : "#000000";

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={[styles.text, { color: textColor }]}>
        Welcome to the Chat, {name}!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Chat;
