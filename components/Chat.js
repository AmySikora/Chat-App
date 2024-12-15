import React, { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Bubble, GiftedChat, InputToolbar } from "react-native-gifted-chat";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Chet component for real-time messages
const Chat = ({ route, navigation, db, isConnected }) => {
  const [messages, setMessages] = useState([]);
  const { userID, name, background } = route.params; // Extract params from Start.js

  let unsubMessages; // variable for onSnapshot unsubscribe function
 
  // Fetch messages in real-time
 useEffect(() => {
  navigation.setOptions({ title: name });

    if (isConnected === true) {
      //unregister current onSnaphot() listener to avoid registering multiple listeners when
      // useEffect code os re-executed
      if (unsubMessages) unsubMessages();
      unsubMessages = null;

    const q = query(collection(db, "messages"),orderBy("createdAt", "desc"));
     unsubMessages = onSnapshot(q, (doumentsSnapshot) => {
      let newMessages = [];
      doumentsSnapshot.forEach(doc => {
        newMessages.push({ _id: doc.id, ...doc.data(),
          createdAt: doc.data().createdAt.toDate() })
      });

      cacheMessages(newMessages);
      setMessages(newMessages);
    });
    } else loadCachedMessages();

      // Clean up listener
      return () => {
        if (unsubMessages) unsubMessages();
    }
    }, [isConnected]);

    const cacheMessages = async (messagesToCache) => {
      try {
        await AsyncStorage.setItem("messages", JSON.stringify(messagesToCache));
      } catch (error) {
        console.log(error.message);
      }
    }

    const loadCachedMessages = async () => {
      try {
        const cachedMessages = await AsyncStorage.getItem("messages");
        setMessages(cachedMessages ? JSON.parse(cachedMessages) : []);
      } catch (error) {
        console.log(error.message);
      }
    };    

  // Function to handle sending messages
  const onSend = newMessages => {
    addDoc(collection(db, "messages"), newMessages[0]);
  };

  // Custom bubble styling
  const renderBubble = props => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: { backgroundColor: "#000" },
        left: { backgroundColor: "#FFF" },
      }}
    />
  );

  const renderInputToolbar = (props) => {
    if (isConnected) return <InputToolbar {...props} />;
    else return null;
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        onSend={onSend(messages)}
        user={{ _id: userID, name }}
      />
      {Platform.OS === "android" ? <KeyboardAvoidingView behavior="height" /> : null}
      {Platform.OS === "iOS" ? <KeyboardAvoidingView behavior="padding" /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
