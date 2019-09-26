import React from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import requestApiData from '../Actions/actions';
import { REQUEST_API_DATA } from "../Actions/mock_actions";

class Apidisplay extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.requestApiData()
   // console.warn(this.props);
  }
  render() {
    console.warn(JSON.stringify(this.props.data));
    return null;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>({
requestApiData: ()=>dispatch({ type: REQUEST_API_DATA })
}
)
 // bindActionCreators({ requestApiData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Apidisplay);
