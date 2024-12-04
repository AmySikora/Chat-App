## Project description

A mobile chat application built with React Native. The app will provide users with a chat interface and options to share images and their location.

## Project Features

- Send and receive messages in real-time

- Share location

- Take a photo and share

- Choose a photo from library and share

- Customize theme

### Getting StartedAchievement 5 Project:
React Native Mobile
Chat App
Objective
To build a chat app for mobile devices using React Native. The app will
provide users with a chat interface and options to share images and their
location.
Context
More and more people use their phones for daily tasks, such as shopping, creating to-do lists,
communicating with friends, scheduling meetings, and more. That's why many companies offer native
mobile versions of their web apps, or even skip creating a web app entirely.
In the past, building high-quality mobile apps required a lot of time and money because writing apps
for different platforms like iOS and Android required specialized programmers who could build and
maintain multiple codebases.
Over time, however, new technologies emerged that made it easier for companies to build and
maintain mobile applications using familiar syntax. One of these technologies is React Native, a
framework for building Android and iOS apps that only requires one codebase.
For this Achievement’s project, you’ll use React Native, Expo, and Google Firestore Database to build a
chat app that you can add to your portfolio and demonstrate your knowledge of JavaScript mobile
development.
The 5 Ws
1. Who—The users of the mobile chat app. These could be friends, family or other
students on this course. Your codebase will be used by other developers working on
the product.
2. What—A native chat app built with React Native, as well as all the relevant
documentation.
3. When—Whenever users of your chat app want to communicate with each other.
4. Where—The app will be optimized for both Android and iOS devices. You will use
Expo to develop the app and Google Firestore to store the chat messages.
5. Why—Mobile chat apps are among the most commonly downloaded and used apps
in the world, so knowing how to build a chat app is an indispensable skill. The app
will demonstrate your React Native development skills.
Page 1
Features and Requirements
User Stories
● As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.
● As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.
● As a user, I want to send images to my friends to show them what I’m currently doing.
● As a user, I want to share my location with my friends to show them where I am.
● As a user, I want to be able to read my messages oine so I can reread conversations at any
time.
● As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.
Key Features
● A page where users can enter their name and choose a background color for the chat screen
before joining the chat.
● A page displaying the conversation, as well as an input eld and submit button.
● The chat must provide users with two additional communication features: sending images
and location data.
● Data gets stored online and oine.
Technical Requirements
● The app must be written in React Native.
● The app must be developed using Expo.
● The app must be styled according to the given screen design.
● Chat conversations must be stored in Google Firestore Database.
● The app must authenticate users anonymously via Google Firebase authentication.
● Chat conversations must be stored locally.
● The app must let users pick and send images from the phone’s image library.
● The app must let users take pictures with the device’s camera app, and send them.
● The app must store images in Firebase Cloud Storage.
● The app must be able to read the user’s location data.
Page 2
● Location data must be sent via the chat in a map view.
● The chat interface and functionality must be created using the Gifted Chat library.
● The app’s codebase must contain comments.
Screen Design & Assets
Design Specications
● Vertical and horizontal spacing: evenly distributed
● App title: font size 45, font weight 600, font color #FFFFFF
Page 3
● “Your name”: font size 16, font weight 300, font color #757083, 50% opacity
● “Choose background color”: font size 16, font weight 300, font color #757083, 100% opacity
● Color options HEX codes: #090C08; #474056; #8A95A5; #B9C6AE
● Start chatting button: font size 16, font weight 600, font color #FFFFFF, button color #757083
● Assets available here
Your Project Deliverables
You’ll complete your project step-by-step as you work through each Exercise. For each task, you’ll
submit a deliverable that directly contributes to the final product—in this case, a native mobile chat
app to demonstrate your React and React Native programming skills.
Below is a breakdown of your course project deliverables by Exercise.
Exercise 1: Building Native Applications with JavaScript
● Set up your development environment to work with React Native and Expo.
● Create the app’s layout using native UI components and style the start screen based on the
screen designs you received in this brief.
Exercise 2: Chat UIs & Accessibility
● Build the chat screen and the chat functionality with the Gifted Chat library.
Exercise 3: Real-Time Applications & Data Storage
● Authenticate users anonymously with Firebase.
● Store conversations in the Firestore Database.
Exercise 4: Storing Data on the Client-Side
● Store chats locally using asyncStorage so they’re available oine.
● Authenticate users and store chat messages in Firestore as well as on the device when users
are online.
● Retrieve locally stored messages and disallow the creation of new messages when users are
oine.
Page 4
Exercise 5: Communication Features
● Let users pick an image from the device’s library and take pictures with the device’s camera
app.
● Store images in Google Firebase Cloud Storage and send images via Gifted Chat.
● Let users send their current location in a map view via Gifted Chat.
● Apply accessibility considerations to app design and development.
Page 5

- **Technologies**

  - React Native
  - Expo and Expo Go App
  - Google Firestore Database

- **Libraries**
  - Gifted Chat library
  - Expo ImagePicker
  - Expo MediaLibrary
  - Expo Location

To run this app locally, you'll need to follow these steps:

- Clone this repository.
- Set up Expo in your development environment:

  - Install Expo and Expo CLI, as this is the platform you’ll use to build your app;

        npm install -g expo-cli

  - Install Expo Go app on your mobile device, so that you can test your app on your own mobile device;

    Search for the Expo Go app in the relevant app store for your device (iOS or Android)

  - Create an Expo account.

### Prerequisites

Before installing Expo, ensure you have a suitable version of Node installed. At the time of writing, Expo only supports Node 16.. at max.

Node.js: Download and install Node.js. For this you can use the nvm tool https://github.com/nvm-sh/nvm

    nvm install 16.19.0
    nvm use 16.19.0
    nvm alias default 16.19.0

Navigate to the chat-app directory and install all dependencies:

    npm install

## Setting the Firestore Database

- Sign up into Google Firebase

- On the main page, you will see the option to "Create a project" or "Add new project" if this is not your first project.

  - Give your project a name, for example, "chat-app."
  - Enable or disable Google Analytics for this project. (For this project, I disabled Analytics)

1. **You will need first to create a Database to store the messages for your chat app**.

- Head to the menu on the left-hand side of the page and click on Build than on Firestore Database and Create Database

      Build > Firestore Database > Create Database Button

- A modal will appear, prompting you to select the location for storing Cloud Firestore data.

      Database ID is set to Default

      From the dropdown menu, select the location where your Users are located.

- For this project, I selected **Start in production mode**, click Next.

- Under Data Tab click on **Start Collection** and give the name, for example, "messages"
- Next for the **Document Id** click on **Auto ID** to auto-generate a document ID. Click **Save** . The new messages will be now saved in this collection and the **Fields** are defined in code > Chat.js

- Click the Rules tab on the Firestore dashboard. With its default configuration, the database doesn’t allow read-and-write queries from a mobile or web app to be performed. We need to change this piece of code. Change false to true in the following line:

      allow read, write: if false;

  to:

       allow read, write: if true;

- Click **Publish**

- Next, navigate to Project Setting on the left-hand side of the page. Under the General tab, find the Your Apps option. Choose a platform to start your app. For this project, I selected Web.

         Project Settings > General Tab > Your Apps > Web ( </> ).

- Give your App a nickname and click **Register**.

- Here you will find your web app's Firebase configuration and you need to copy them in App.js:

      const firebaseConfig = {
        apiKey: "your-api-key",
        authDomain: "your-authdomain",
        projectId: "your-project-id",
        storageBucket: "your-storage-bucket",
        messagingSenderId: "your-messaging-sender-id",
        appId: "your-app-id",
        };

2.  **Implement an authentication process into your app**

- Head to your Firestore dashbord and under Build click Authentication and Get Started button. By default, you should be taken to the Sign-in method tab.

      Build > Authentication > Get Started button > Sign-in method tab

- From the wide range of authentication methods provided by Firestore Google, I opted for the Anonymous option, which suffices for this project.

  - Enable Anonymous and click **Save** . With anonymous authentication, you receive a user object with an ID in it, which you can then store in your database for that particular user. The authentication code resides in Start.js component.

3. **To be able to store and send images or videos in your native chat app, you’ll need to set up Firebase Storage**

- Head to your Firestore dashbord and under Build click Storage and Get Started button. A popup will open that asks you to set your cloud storage. Keep everything on default and press **Next**, then **Done**

- You need to allow uploading and downloading files to and from the storage, from whichever device connects to your Firebase Storage.

- Go to the Rules tab, change false to true in the following line:

        allow read, write: if false;

  to:

         allow read, write: if true;

- Click **Publish**

- You don’t need to configure anything else because everything you need to work with Firebase Cloud Storage is already built into the Firestore library.

## After seting up the Firestore Database you can now start the App.

- Initialize the app in your terminal:

      npx expo start

- Use the Expo Go App on your mobile device to check the UI