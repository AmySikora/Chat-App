import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const colors = ["#090C08", "#474056", "#8A95A5", "#B9C6AE"]; // Background color options

  return (
    <ImageBackground
      source={require("../assets/Background Image.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* App Title */}
        <Text style={styles.title}>Chat App</Text>

        {/* White Box for Input and Options */}
        <View style={styles.whiteBox}>
          {/* Input Field with User icon */}
          <Image source={require("../assests/icon.svg")} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Enter Your Name"
            placeholderTextColor="rgba(117, 112, 131, 0.5)"
          />

          {/* Color Selection */}
          <Text style={styles.chooseColorText}>Choose Background Color:</Text>
          <View style={styles.colorOptionsContainer}>
            {colors.map((color) => (
             <TouchableOpacity
             key={color} 
             style={[
               styles.colorOption,
               { backgroundColor: color },
               backgroundColor === color && styles.selectedColor, 
             ]}
             onPress={() => setBackgroundColor(color)} 
           />
           
            ))}
          </View>

    {/* Button */}
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate("Chat", {
          name: name, 
          background: backgroundColor, 
        })
      }
    >
      <Text style={styles.buttonText}>Start Chatting</Text>
    </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  whiteBox: {
    width: "88%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  textInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#757083",
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    marginBottom: 20,
  },
  chooseColorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    marginBottom: 10,
  },
  colorOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: "#757083",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#757083",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default Start;
