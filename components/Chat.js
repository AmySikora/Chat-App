import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const Chat = ({ route, navigation }) => {
  const [messages, setMessages] = useState ([]);
  const { name, background } = route.params; // Destructure the name and background color from Start.js
  const onSend = (newMessages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }
  useEffect(() => {
     setMessages([
      {
        _id: 1,
        test: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        }
      }
  ])

  return (
    <View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1
        }}
      />
      { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
    </View>
  )
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
