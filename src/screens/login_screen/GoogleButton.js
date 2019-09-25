import React from 'react';
import {Image,View,TouchableOpacity,Text,Webview} from 'react-native'
import Apicall2 from '../../networking/apicall2'


export default class GoogleButton extends React.Component {
constructor(props){
    super(props)

    this.state={
        dataResponse:'hi bro'
    }
}

callme=()=>{
    
      endpoint = "auth/google";
      Apicall2(endpoint).then(responseJson => {
         // console.warn(responseJson)
        this.setState({ dataResponse: responseJson });
      });
}
    render() {
      return (
          <View style={{flex:1}}>

    <TouchableOpacity onPress={()=>this.callme()} style={{width:'100%',height:'20%',backgroundColor:'green'}}>
        <Text>google</Text>
    </TouchableOpacity>   

<Webview source={{html:'<p>this.state.dataResponse</p>'}}/>
    </View>
      );
    }
  }