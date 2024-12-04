import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); 

  // List of background color options
  const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

  return (
    <ImageBackground
      source={require('../assets/Background Image.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        {/* App Title */}
        <Text style={styles.title}>Chat App</Text>

        {/* Input Field */}
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Your Name"
          placeholderTextColor="rgba(117, 112, 131, 0.5)" // 50% opacity
        />

        {/* Choose Background Color */}
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
              onPress={() => setBackgroundColor(color)} // Set selected color
            />
          ))}
        </View>

        {/* Start Chatting Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Chat', { name: name, backgroundColor: backgroundColor })
          }
        >
          <Text style={styles.buttonText}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  textInput: {
    width: '88%',
    height: 50,
    borderWidth: 1,
    borderColor: '#757083',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight opacity
    marginBottom: 20,
  },
  chooseColorText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    marginBottom: 10,
  },
  colorOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '88%',
    marginBottom: 20,
  },
  colorOption: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: '#FFFFFF', // Highlight selected color
  },
  button: {
    width: '88%',
    height: 50,
    backgroundColor: '#757083',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default Start;
