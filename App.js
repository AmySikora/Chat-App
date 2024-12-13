// Import React and Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Import Start and Chat components
import Start from './components/Start';
import Chat from './components/Chat';

// Create the navigator
const Stack = createNativeStackNavigator();

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

 const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
    
      