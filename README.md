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
- `react-native-gifted-chat` (Chat interface)
- `expo-image-picker` (Media sharing)
- `expo-location` (fetching and sharing location)
- `@react-native-async-storage/async-storage` (Offline message storage)

---

## **Getting Started**

### **1. Prerequisites**
- **Node.js**: Install Node.js using [nvm](https://github.com/nvm-sh/nvm).
  ```bash
  nvm install 16.19.0
  nvm use 16.19.0
  nvm alias default 16.19.0  

 - **Expo CLI**: Install Expo CLI globally.
  bash
  Copy code
  npm install -g expo-cli

  - **Firebase Project**: Create a Firebase project to store chat data, images, and configure authentication.

## **2. Installation**
  1. Clone the repository:
      bash
      git clone <repository-url>
      cd chat-app
  
  2. Install dependencies:
      bash       
      npm install

## **3. Firebase Setup**
 1. Create a Firebase project:
      Go to the Firebase Console.
      Create a new project.
 2. Firestore Database:
      Navigate to Firestore Database and click "Start Collection."
      Name the collection messages.
      Set the security rules:
      javascript 
      Copy code
        rules_version = '2';
        service cloud.firestore {
          match /databases/{database}/documents {
            match /{document=**} {
              allow read, write: if true;
            }
          }
        }

  3. Authentcation:
      Go to Authentication > Sign-in Method.
      Enable "Anonymous Authentication" and save.
      
  4. Cloud Storage:
      Navigate to Storage and click "Get Started."
      Update the storage rules:
      javascript
      Copy code
            rules_version = '2';
      service firebase.storage {
        match /b/{bucket}/o {
          match /{allPaths=**} {
            allow read, write: if true;
          }
        }
      }

   5. Add Firebase configuration 
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
  
## **4. Running the App**
  1. Start the app: 
      bash
      Copy code
      npx expo start

  2. Test on a physical device:
      Install the Expo Go app on your device.
      Scan the QR code generated by expo start to view the app.

## **Testing the Setup**
  1. Clone the repository into a new folder.
  2. Follow the installation and Firebase setup steps outlined above.
  3. Run the app using npx expo start and test all the features:
      -Sending messages.
      -Sharing images from the library and camera.
      -Sharing location.
      -Offline access.

## **Troubleshooting**
    Firebase issues: Ensure your database and storage rules are configured as mentioned above.
    Expo setup: Make sure you have the latest version of Expo CLI installed.
    Dependencies: If npm install fails, try using the --legacy-peer-deps flag.
