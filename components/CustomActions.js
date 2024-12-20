import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CustomActions = ({ wrapperStyle, iconTextStyle, onSend, storage, userID }) => {
  const actionSheet = useActionSheet();

  const onActionPress = () => {
    const options = ["Choose From Library", "Take Picture", "Send Location", "Cancel"];
    const cancelButtonIndex = options.length - 1;

    // Displays an action sheet where users can select and image from the libray, take a picture, send their loaction, and cancel
    actionSheet.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      async (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            pickImage();
            break;
          case 1:
            takePhoto();
            break;
          case 2:
            getLocation();
            break;
          default:
        }
      }
    );
  };

  // Gernerates a for uploaded images
  const generateReference = (uri) => {
    const timeStamp = new Date().getTime();
    const imageName = uri.split("/").pop(); // Extracts the image name from URI
    return `${userID}-${timeStamp}-${imageName}`;
  };

  // Uploads and stores images in Firebase storage and sends it to chat
  const uploadAndSendImage = async (imageURI) => {
    try {
      const uniqueRefString = generateReference(imageURI);
      const newUploadRef = ref(storage, uniqueRefString);
      const response = await fetch(imageURI);
      const blob = await response.blob();

      await uploadBytes(newUploadRef, blob);
      const imageURL = await getDownloadURL(newUploadRef);
      onSend([
        {
          _id: Date.now(),
          text: "",
          createdAt: new Date(),
          user: { _id: userID },
          image: imageURL,
        },
      ]);
    } catch (error) {
      Alert.alert("Failed to upload image", error.message);
    }
  };
 // Alows user to pick an image from their library
  const pickImage = async () => {
    const permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissions.granted) {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        await uploadAndSendImage(result.assets[0].uri);
      } else {
        Alert.alert("Image selection canceled.");
      }
    } else {
      Alert.alert("Permission to access media library is required.");
    }
  };

   // Lets the user take a picture from their device camera
  const takePhoto = async () => {
    const permissions = await ImagePicker.requestCameraPermissionsAsync();
    if (permissions.granted) {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.canceled) {
        await uploadAndSendImage(result.assets[0].uri);
      } else {
        Alert.alert("Photo capture canceled.");
      }
    } else {
      Alert.alert("Permission to access the camera is required.");
    }
  };
 
  // Fetched the uesr's location and sends to the chat
  const getLocation = async () => {
    const permissions = await Location.requestForegroundPermissionsAsync();
    if (permissions.granted) {
      const location = await Location.getCurrentPositionAsync({});
      if (location) {
        onSend([
          {
            _id: Date.now(),
            text: "",
            createdAt: new Date(),
            user: { _id: userID },
            location: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
          },
        ]);
      } else {
        Alert.alert("Error occurred while fetching location.");
      }
    } else {
      Alert.alert("Permission to access location is required.");
    }
  };
 
  // Displays buttons that users can press to choose what they would like send to the chat from their device
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Select input option"
      accessibilityHint="Choose to pick an image, take a picture, or share your location."
      accessibilityRole="button"
      style={styles.container}
      onPress={onActionPress}
    >
      <View style={[styles.wrapper, wrapperStyle]}>
        <Text style={[styles.iconText, iconTextStyle]}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: "#b2b2b2",
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "#b2b2b2",
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "transparent",
    textAlign: "center",
  },
});

export default CustomActions;
