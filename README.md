# **React Native Mobile Chat App**

## **Project Description**
A mobile chat application built with React Native, providing users with a real-time chat interface and additional features such as sharing images and location data. This project demonstrates React Native mobile development skills using Expo and Google Firestore Database.

---

## **Features**
- **Real-time messaging**: Send and receive messages instantly.
- **Media sharing**: Share images from the library or camera.
- **Location sharing**: Send your current location via the chat interface.
- **Offline access**: Read past messages offline.
- **Customizable theme**: Choose a background color for your chat screen.

---

## **Technologies**
- **Framework**: React Native
- **Development Tool**: Expo
- **Database**: Google Firestore
- **Storage**: Firebase Cloud Storage

### **Libraries**
- `react-native-gifted-chat` (Chat UI)
- `expo-image-picker` (Media sharing)
- `expo-location` (Location sharing)
- `@react-native-async-storage/async-storage` (Offline storage)

---

## **Getting Started**

### **1. Prerequisites**
- **Node.js**: Install Node.js using [nvm](https://github.com/nvm-sh/nvm).
  ```bash
  nvm install 16.19.0
  nvm use 16.19.0
  nvm alias default 16.19.0

Expo CLI: Install Expo CLI globally.
bash
Copy code
npm install -g expo-cli
2. Installation
Clone the repository:
bash
Copy code
git clone <repository-url>
cd chat-app
Install dependencies:
bash
Copy code
npm install
3. Firebase Setup
Firestore Database
Create a Firebase project and navigate to Firestore Database.
Click "Start Collection" and name it messages.
Set the security rules to allow read and write:
javascript
Copy code
allow read, write: if true;
Save the Firebase configuration and add it to the project:
javascript
Copy code
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};
Authentication
Enable Anonymous Authentication:
Navigate to Authentication > Sign-in Method.
Enable "Anonymous" and save.
Cloud Storage
Navigate to Storage and click "Get Started."
Update the rules:
javascript
Copy code
allow read, write: if true;
Save and publish.
4. Running the App
Start the app:
bash
Copy code
npx expo start
Use the Expo Go App on your mobile device to scan the QR code and run the app.
