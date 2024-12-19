import React, { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Bubble, GiftedChat, InputToolbar } from "react-native-gifted-chat";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomActions from './CustomActions';
import MapView from 'react-native-maps';

const Chat = ({ route, navigation, db, isConnected, storage }) => {
  const [messages, setMessages] = useState([]);
  const { userID, name, background } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });

    let unsubMessages;

    if (isConnected) {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

      unsubMessages = onSnapshot(q, (docs) => {
        const newMessages = docs.docs.map(doc => ({
          _id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis())
        }));
        cacheMessages(newMessages);
        setMessages(newMessages);
      });
    } else {
      loadCachedMessages();
    }

    return () => {
      if (unsubMessages) unsubMessages();
    };
  }, [isConnected]);

  const cacheMessages = async (messagesToCache) => {
    try {
      await AsyncStorage.setItem("messages", JSON.stringify(messagesToCache));
    } catch (error) {
      console.log("Error caching messages:", error.message);
    }
  };

  const loadCachedMessages = async () => {
    try {
      const cachedMessages = await AsyncStorage.getItem("messages");
      if (cachedMessages) setMessages(JSON.parse(cachedMessages));
    } catch (error) {
      console.log("Error loading cached messages:", error.message);
    }
  };

  const onSend = async (newMessages = []) => {
    if (newMessages.length > 0) {
      try {
        await addDoc(collection(db, "messages"), newMessages[0]);
      } catch (error) {
        console.error("Error adding message:", error);
      }
    }
  };

  const renderInputToolbar = (props) => (isConnected ? <InputToolbar {...props} /> : null);

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: { backgroundColor: "#000" },
        left: { backgroundColor: "#FFF" },
      }}
    />
  );

  const renderCustomActions = (props) => (
    <CustomActions
      onSend={onSend}
      storage={storage}
      userID={userID}
      {...props}
    />
  );

  const renderCustomView = (props) => {
    const { currentMessage } = props;
    if (currentMessage.location) {
      return (
        <MapView
          style={styles.map}
          region={{
            latitude: currentMessage.location.latitude,
            longitude: currentMessage.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }
    return null;
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        onSend={onSend}
        renderActions={renderCustomActions}
        renderCustomView={renderCustomView}
        user={{ _id: userID, name }}
      />
      {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      {Platform.OS === 'ios' ? <KeyboardAvoidingView behavior="padding" /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
});

export default Chat;
