import RNFetchBlob from 'rn-fetch-blob'
import AsyncStorage from '@react-native-community/async-storage';
import imagepicker from 'react-native-image-picker';
import React, {Component} from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Animated,
  Picker,
  Button,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import {connect} from 'react-redux'

import firebase from 'react-native-firebase';
// const Blob = RNFetchBlob.polyfill.Blob
// const fs = RNFetchBlob.fs
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
// window.Blob= Blob
// //var imageRef=''



class UploadFile extends Component {
    constructor(props) {
      super(props);
  
      this.state = {

    };
}


handleposter = () => {
    imagepicker.showImagePicker(
      {
        title: 'Upload Image',
        // noData: true,
      },
      response => {
//         if (!response.didCancel) {
console.log('response.uri',response.path)
//           firebase.storage().ref().child('myimg.jpg')
//           .put(response.uri, { contentType : 'image/jpeg' }) //--> here just pass a uri
//           .then((snapshot) => {
//             console.log(JSON.stringify(snapshot.metadata));
//           })
    //    });


   uploadImage(response.path.toString())
        } 
      
    );
  };






render() {

    return (
<View style={{flex:1}}>

<Button title="choose poster" onPress={this.handleposter} />
</View>
);
}
}
const styles = StyleSheet.create({
input: {
  height: 44,
  fontSize: 20,
  color: '#000',
  borderBottomWidth: 1,
  borderBottomColor: '#555',
},
});

const mapStateToProps = state => ({
// userdetails: state.CreateEvent.userdetails,
// createEventid:state.CreateEvent.createEventid
});

const mapDispatchToProps = dispatch => ({
// sendUserDetails: data => dispatch(sendUserDetails(data)),
// create_event: data => dispatch(create_event(data)),
});

export default connect(
mapStateToProps,
mapDispatchToProps,
)(UploadFile);



export const uploadImage=(uri,mime='image/jpeg')=>{
  console.log('gggggg')
    // return()=>{

        return new Promise((resolve,reject)=>{
          console.log('jjjjjjjjjj')

            const UploadUri = uri
            const sessionId = new Date().getTime()
            let UploadBlob = null
            
            const imageRef = firebase.storage().ref().child('photos/new.jpeg')
            fs.readFile(UploadUri,'base64')
            .then((data)=>{
              console.log('data',data)
                return Blob.build(data,{type:`${mime};BASE64`})
            })
            .then((blob)=>{
              console.log('blob',blob)
                UploadBlob=blob
                return imageRef.putFile(blob,{contentType:mime})
            })
            .then(()=>{
              console.log('here also')
                UploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url)=>{
              console.log('url',url)
                resolve(url)
                storeReference(url,sessionId)
            })
            .catch((error)=>{
                reject(error)
            })
        })
  //  }
}

 const storeReference=(downloadUrl,sessionId)=>{
  console.log('sssssss')

  let imageRef=firebase.storage().ref('photos').child('file.jpg')
  let currentUser = firebase.auth().currentUser
  console.log(currentUser)
  let image={
    type:'image',
    url:downloadUrl,
    createdAt:sessionId,
    user:{
      id:currentUser.uid,
    email:currentUser.email
      }
  }
  firebase.database().ref('gs://eventsmobile-9480f.appspot.com/photos')
  .push(image);
}

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Dimensions,
//   ScrollView
// } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import firebase from 'react-native-firebase';
// import uuid from 'uuidv4';

// const options = {
//   title: 'Select Image',
//   storageOptions: {
//     skipBackup: true,
//     path: 'images'
//   }
// };
// const ImageRow = ({ image, windowWidth, popImage }) => (
//   <View>
//     <Image
//       source={{ uri: image }}
//       style={[styles.img, { width: windowWidth / 2 - 15 }]}
//       onError={popImage}
//     />
//   </View>
// );
// export default class UploadFile extends Component {
//   state = {
//     imgSource: '',
//     uploading: false,
//     progress: 0,
//     images: []
//   };
//   componentDidMount() {
//     let images;
//     AsyncStorage.getItem('images')
//       .then(data => {
//         images = JSON.parse(data) || [];
//         this.setState({
//           images: images
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   /**
//    * Select image method
//    */
//   pickImage = () => {
//     ImagePicker.showImagePicker(options, response => {
//       if (response.didCancel) {
//         console.log('You cancelled image picker 😟');
//       } else if (response.error) {
//         alert('And error occured: ', response.error);
//       } else {
//         const source = { uri: response.uri };
//         console.log(response.uri)
//         this.setState({
//           imgSource: source,
//           imageUri: response.uri
//         });
//       }
//     });
//   };



  
//   /**
//    * Upload image method
//    */
//   uploadImage = () => {


//     const ext = this.state.imageUri.split('.').pop(); // Extract image extension
//    // console.log('ext',ext)
//     const filename = `${uuid()}.${ext}`; // Generate unique name
//   console.log('filename',filename)
//   //   console.log('image uri',this.state.imageUri)
//     this.setState({ uploading: true });
//     firebase
//       .storage()
//       .ref(`photos/${filename}`)
//       .put(this.state.imageUri, {
//         contentType: 'image/jpeg'
//       })

//       .then((snapshot)=>{
//         console.log(snapshot)
//         blob.close();

//         resolve(snapshot);

//       }).catch((error)=>{
//         console.log(error)
//         throw error;

//       });



//       // .on(
//       //   firebase.storage.TaskEvent.STATE_CHANGED,
//       //   snapshot => {
//       //     let state = {};
//       //     state = {
//       //       ...state,
//       //       progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
//       //     };
//       //     if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
//       //       const allImages = this.state.images;
//       //       allImages.push(snapshot.downloadURL);
//       //       state = {
//       //         ...state,
//       //         uploading: false,
//       //         imgSource: '',
//       //         imageUri: '',
//       //         progress: 0,
//       //         images: allImages
//       //       };
//       //       AsyncStorage.setItem('images', JSON.stringify(allImages));
//       //     }
//       //     this.setState(state);
//       //   },
//       //   error => {
//       //     unsubscribe();
//       //     alert('Sorry, Try again.');
//       //   }
//      // );
//   };
//   /**
//    * Remove image from the state and persistance storage
//    */
//   removeImage = imageIndex => {
//     let images = this.state.images;
//     images.pop(imageIndex);
//     this.setState({ images });
//     AsyncStorage.setItem('images', JSON.stringify(images));
//   };
//   render() {
//     const { uploading, imgSource, progress, images } = this.state;
//     const windowWidth = Dimensions.get('window').width;
//     const disabledStyle = uploading ? styles.disabledBtn : {};
//     const actionBtnStyles = [styles.btn, disabledStyle];
//     return (
//       <View>
//         <ScrollView>
//           <View style={styles.container}>
//             <TouchableOpacity
//               style={actionBtnStyles}
//               onPress={this.pickImage}
//               disabled={uploading}
//             >
//               <View>
//                 <Text style={styles.btnTxt}>Pick image</Text>
//               </View>
//             </TouchableOpacity>
//             {/** Display selected image */}
//             {imgSource !== '' && (
//               <View>
//                 <Image source={imgSource} style={styles.image} />
//                 {uploading && (
//                   <View
//                     style={[styles.progressBar, { width: `${progress}%` }]}
//                   />
//                 )}
//                 <TouchableOpacity
//                   style={actionBtnStyles}
//                   onPress={this.uploadImage}
//                   disabled={uploading}
//                 >
//                   <View>
//                     {uploading ? (
//                       <Text style={styles.btnTxt}>Uploading ...</Text>
//                     ) : (
//                       <Text style={styles.btnTxt}>Upload image</Text>
//                     )}
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             )}

//             <View>
//               <Text
//                 style={{
//                   fontWeight: '600',
//                   paddingTop: 20,
//                   alignSelf: 'center'
//                 }}
//               >
//                 {images.length > 0
//                   ? 'Your uploaded images'
//                   : 'There is no image you uploaded'}
//               </Text>
//             </View>
//             <FlatList
//               numColumns={2}
//               style={{ marginTop: 20 }}
//               data={images}
//               renderItem={({ item: image, index }) => (
//                 <ImageRow
//                   windowWidth={windowWidth}
//                   image={image}
//                   popImage={() => this.removeImage(index)}
//                 />
//               )}
//               keyExtractor={index => index}
//             />
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#ffffff',
//     marginTop: 20,
//     paddingLeft: 5,
//     paddingRight: 5
//   },
//   btn: {
//     paddingLeft: 20,
//     paddingRight: 20,
//     paddingTop: 10,
//     paddingBottom: 10,
//     borderRadius: 20,
//     backgroundColor: 'rgb(3, 154, 229)',
//     marginTop: 20,
//     alignItems: 'center'
//   },
//   disabledBtn: {
//     backgroundColor: 'rgba(3,155,229,0.5)'
//   },
//   btnTxt: {
//     color: '#fff'
//   },
//   image: {
//     marginTop: 20,
//     minWidth: 200,
//     height: 200,
//     resizeMode: 'contain',
//     backgroundColor: '#ccc',
//   },
//   img: {
//     flex: 1,
//     height: 100,
//     margin: 5,
//     resizeMode: 'contain',
//     borderWidth: 1,
//     borderColor: '#eee',
//     backgroundColor: '#ccc'
//   },
//   progressBar: {
//     backgroundColor: 'rgb(3, 154, 229)',
//     height: 3,
//     shadowColor: '#000',
//   }
// });