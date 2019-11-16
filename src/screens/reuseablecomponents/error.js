import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
const { width } = Dimensions.get('window');
function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}


function MiniWaiteSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>please wait</Text>
    </View>
  );
}



class OfflineNotice extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
         isConnected:true
        };
      }

      componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
      }


      componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
     }

 handleConnectivityChange = isConnected => {
        this.setState({ isConnected });
      }

      render() {
        const { data, ...otherProps } = this.props;

if(data==undefined || data.length<1 ){
  return <MiniWaiteSign 
  {...otherProps}
  />
}

        if (!this.state.isConnected) {
          return <MiniOfflineSign />;
        }
        return null;
      }
}
const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30
  },
  offlineText: { 
    color: '#fff'
  }
});
export default OfflineNotice;