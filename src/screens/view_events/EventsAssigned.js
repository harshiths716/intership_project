import React, { Component, Fragment } from "react";
import { StyleSheet, TouchableOpacity, Text, View, FlatList, Dimensions } from "react-native";
//import FadeInView from "./animation";
import { Switch, Image } from "react-native";
//import LogoTitle from "./headerlogo";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
//import Eventinfo from "./Eventinfo";


const data=[
    {eventID:'1',
      startTime:'345687',
      venue:'ground',
      description:'play',
      ename:'Team run',
      organizer:'steve',
      description:'The quick brown fox jumps over the lazy dog',
       time:'2019:09-20T19:22:22:022Z',
    },
    {eventID:'2',
      startTime:'345688',
      venue:'paaark',
      description:'play',
      organizer:'paul',
      description:'The quick brown fox jumps over the lazy dog',
      ename:'slowrun',
    },
    {eventID:'3',
      startTime:'345689',
      venue:'park',
      description:'play',
      organizer:'baul',
      description:'asa22222ababaaaadadcasaasasxsaxaasdasdawawdawcxzczxczxc',
      ename:'swim run',
    },
    {eventID:'4',
      startTime:'345686',
      venue:'park',
      description:'play',
      organizer:'tony',
      description:'The quick brown fox jumps over the lazy dog',
      ename:'never run',
    },
    {eventID:'5',
      startTime:'34wwe5686',
      venue:'park',
      description:'play',
      organizer:'tony',
      description:'The quick brown fox jumps over the lazy dogdawcxzczxczxc',
      ename:'jump run',
    },
    {eventID:'6',
      startTime:'34sdsds5686',
      venue:'park',
      description:'play',
      organizer:'tony',
      description:'The quick brown fox jumps over the lazy dog',
      ename:'alwaysrun',
    },
]
    export default class EventsAssigned extends Component {
        constructor(props) {
          super(props);
          this.state = {
            token: "",
            username: "",
            date: "",
            dataResponse: "",
            date3: "",
            date: '',
            date5: '',
            date8: '',
            daa: '',
        
          };
        }
        // static navigationOptions = {

        //   title: 'Event Managment',
        //   headerLeft: <LogoTitle />,
        //   headerRight: (
        //     <View style={{ flexDirection: "row" }}>
      
        //     </View>
        //   ),
        //   headerStyle: {
        //     backgroundColor: "white"
        //   },
        //   headerTintColor: "white",
        //   headerTitleStyle: {
        //     textAlign: 'center',
        //     color: 'black',
        //     // fontWeight: "bold",
        //     fontFamily: "Roboto"
        //   }
        // };
        renderItem = ({ item, index }) => {

          console.warn(item);
          const { navigate } = this.props.navigation;
          // if (item.eventID) {
      
          return (
            <ScrollView style={styles.container}>
      
      
              
              <View
      
                style={styles.bottomItem}>
                <TouchableOpacity
                  style={styles.bottomItemInner}
                  onPress={() => {
                    navigate("eventdet", item);
                  }}
                >
      
      
                  <Text
                    style={{ fontFamily: "Roboto", fontSize: 17, color: "#ffffff" }}
                  >
      
                    {item.startTime}
                  </Text>
                  <Text numberOfLines={1} style={{ fontSize: 17, fontFamily: "Roboto" }}>
                    {item.ename}
                  </Text>
                  <Text numberOfLines={1} style={{ fontSize: 17, fontFamily: "Roboto" }}>
                    {item.venue}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{ color: "white", fontSize: 14, fontFamily: "Roboto" }}
                  >
                    {item.description}
                  </Text>
                  <View style={styles.containerr}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                  >
                    <Text> Accept </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={this.onPress}
                  >
                    <Text> Reject</Text>
                  </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={styles.button2}
                    onPress={this.onPress}
                  >
                    <Text> Message</Text>
                  </TouchableOpacity>
      
      
                </TouchableOpacity>
      
              </View>
      
            </ScrollView>
          );
        }
        
        upevents = () => {
          if (this.state.dataResponse.result) {
            return (
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 30,
                    opacity: 0.1,
                    alignSelf: "center"
                  }}
                >
                  no events
                    </Text>
              </View>
            );
          } else {
            return (
              <FlatList
                // numColumns={3}
                data={data}
                // style={styles.container}
                renderItem={this.renderItem}
              // numColumns={numColumns}
              />
            );
          }
        };

        render() {
          //  console.warn(data.users[0].name)
          return (
      
            <ScrollView style={styles.scrollView}>
              <View style={{ backgroundColor: "white" }}>
      
      
                <View
                  style={{
                    // flexDirection: "row",
                    //flexWrap}}: "wrap-reverse",
                    alignSelf: "center"
                  }}
                >
      
                </View>
      
      
                {this.upevents()}

                </View>

</ScrollView>
);
}
}



const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
  button: {
    flex: 1,
    backgroundColor:'white',
  },
  button1: {
    flex:1,
     backgroundColor: 'red',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'green',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  count:
    { flex: 3, },
  stretch: {
    width: 430,
    height: 300,
    resizeMode: 'center'
  },



  container: {
    flex: 1,
    // marginVertical: 20
  },
  //   item: {
  //     backgroundColor: '#4D243D',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     flex: 1,
  //     margin: 1,
  //     height: Dimensions.get('window').width / numColumns, // approximate a square
  //   },
  //   itemInvisible: {
  //     backgroundColor: 'transparent',
  //   },
  //   itemText: {
  //     color: '#fff',
  //   },
  //   container: {
  //     // width: "93%",

  //    },
  //    flatlist: {
  //    //  flexWrap: 'wrap',
  //   // flexDirection:'column'
  //    },
  //    content: {
  //    // alignItems: 'flex-end'
  //    },
  //   top: {
  //     //height: "45%",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     backgroundColor: "green"
  //   },
  //   profileimage: {
  //     width: 140,
  //     height: 140,
  //     borderRadius: 100,
  //     borderWidth: 4,
  //     borderColor: "black",
  //     backgroundColor: "yellow"
  //   },
  //   center: {
  //    // height: "10%",
  //     backgroundColor: "#7fbcac"
  //   },
  //    bottom: {
  //      //height: "100%",
  //    //  alignSelf:'center',
  //      //backgroundColor: "#7fbcac",
  //     // flexDirection: "row",
  //      //flexWrap: "wrap",
  //     // padding: 5,

  //     // margin:5
  //    },
  count:
  {
    flexDirection: 'column-reverse'


  },
  bottomItem: {
    width: "100%",
    padding: '2%'
    //height: "85%",
  },
  bottomItemInner: {
    // flex: 1,
    backgroundColor: "#4796ae",
    //  width:'50%',
    //  height: "200%",
    padding: 5,
    borderRadius: 7,
  },
  ScrollView:
  {
    backgroundColor: 'red',
    marginHorizontal: 30,
  },



});


