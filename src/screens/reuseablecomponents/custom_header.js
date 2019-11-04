import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  Text,
  View,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//import FadeInView from "./animation";
import {Switch, Image} from 'react-native';
//import LogoTitle from "./headerlogo";
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';