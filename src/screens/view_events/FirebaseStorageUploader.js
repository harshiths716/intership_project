import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import * as firebase from 'firebase/app';
import 'firebase/storage';

//
// Don't forget to initialize firebase!!!
//

const styles = StyleSheet.create({ 
  button: { 
    padding: 10, 
    borderWidth: 1, 
    borderColor: "#333", 
    textAlign: "center", 
    maxWidth: 150 
  }
});


const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class FirebaseStorageUploader extends Component {

  uriToBlob = (uri) => {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.onload = function() {
        // return the blob
        resolve(xhr.response);
      };
      
      xhr.onerror = function() {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };

      // this helps us get a blob
      xhr.responseType = 'blob';

      xhr.open('GET', uri, true);
      xhr.send(null);

    }).then((blob)=>{

      return this.uploadToFirebase(blob);

    }).then((snapshot)=>{

      console.log("File uploaded");
   
    }).catch((error)=>{

      throw error;

    }); 



  }

  uploadToFirebase = (blob) => {

    return new Promise((resolve, reject)=>{

      var storageRef = firebase.storage().ref();

      storageRef.child('photos/photo.jpg').put(blob, {
        contentType: 'image/jpeg'
      }).then((snapshot)=>{

        blob.close();

        resolve(snapshot);

      }).catch((error)=>{

        reject(error)

      })

    })


  }      


  handleOnPress = () => { 

    ImagePicker.showImagePicker(options, result =>{ 
        if (!result.cancelled) {
          // User picked an image
        //  const {height, width, type, uri} = result;
          return this.uriToBlob(result.uri);
  
        }

    }) 
   }


 



  render () {
  
   // var button = 

    return (

      <TouchableOpacity 
      style={{flex:1}}
      onPress={this.handleOnPress}
    >
      <Text>Choose Photo</Text>
    </TouchableOpacity> 
    );
    
  }

}

export default FirebaseStorageUploader;