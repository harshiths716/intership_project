import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Platform,
  Button,
  View,
} from 'react-native';
import FirebaseClient from './FirebaseClient';
import RNFetchBlob from 'rn-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import uuid from 'uuidv4';
// var options = {
//   title: 'Select Avatar',
//  // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = Blob;
export default class App extends Component {
  constructor() {
    super();
    this.getImage = this.getImage.bind(this);
    this.state = {
      image_uri: 'https://avatars0.githubusercontent.com/u/12028011?v=3&s=200',
    };
  }

  uploadImage(uri, mime = 'image/jpeg') {
    

    return new Promise((resolve, reject) => {
      const uploadUri =
        Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      let uploadBlob = null;
       console.warn(uuid())
        const imageRef = FirebaseClient.storage()
        .ref('images')
        .child(uuid()+'.jpg');

      fs.readFile(uploadUri, 'base64')
        .then(data => {
          return Blob.build(data, {type: `${mime};BASE64`});
        })
        .then(blob => {
          uploadBlob = blob;
          return imageRef.put(blob, {contentType: mime});
        })
        .then(() => {
          uploadBlob.close();
          return imageRef.getDownloadURL();
        })
        .then(url => {
          console.warn(url)
         // resolve(url);
        })
       
        });


  
      
    }
  

  getImage() {
    ImagePicker.showImagePicker( response => {
      console.log('Response = ', response.path);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({image_uri: response.uri});
        this.uploadImage(response.uri);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to our Example using Firebase Storage and Camera!
        </Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: this.state.image_uri}}
        />
        <Button onPress={this.getImage} title="Change Image" color="#841584" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
