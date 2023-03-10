import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const ImagePickerExample = () => {
  const [image, setImage] = useState(null);

  // return (
  //   <View>
  //       <Text>sdfsdf</Text>
  //   </View>
  // )

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        // @ts-ignore
        setImage(result?.uri);
      }  
      // console.log("rte", result)
    } catch (error) {
      console.log("err")
    }

    
  };

  // return (
  //   <View>
  //     <Text>sdf</Text>
  //   </View>
  // )

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
