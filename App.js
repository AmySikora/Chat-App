// Import React and Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, disableNetwork, enableNetwork } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// Import Start and Chat components
import Start from './components/Start';
import Chat from './components/Chat';

// Import hooks and utilities
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";

// Suppress warnings related to AsyncStorage
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  const connectionStatus = useNetInfo();

// Firebase configuration 
  const firebaseConfig = {
    apiKey: "AIzaSyDbL-LHFFgVw37QA4UT_vqwwHz8EuHdBvs",
    authDomain: "chatapp-13ea9.firebaseapp.com",
    projectId: "chatapp-13ea9",
    storageBucket: "chatapp-13ea9.firebasestorage.app",
    messagingSenderId: "279477774372",
    appId: "1:279477774372:web:33d95b1e39f66e5131d0b1"
  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);

 //Initialize Firebase storage handler
 const storage = getStorage(app); 

 // Monitor network connection status
 useEffect(() => {
  if (connectionStatus.isConnected === false) {
    Alert.alert("Connection lost!");
    disableNetwork(db);
  } else if (connectionStatus.isConnected === true) {
    enableNetwork(db);
  }
}, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen
          name="Chat"
        >
          {props => <Chat
            isConnected={connectionStatus.isConnected}
            db={db}
            storage={storage}
            {...props}
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
    
      