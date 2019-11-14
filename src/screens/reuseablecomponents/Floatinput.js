import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

export default class MyTextInput extends React.Component {
  state = {
    isFocused: false
  };

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    // const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const { onFocus, label,onBlur, ...otherProps } = this.props;
    return (
      <TextInput
        selectionColor={BLUE}
        underlineColorAndroid={
          isFocused ? BLUE : LIGHT_GRAY
        }
        placeholder={label}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        style={styles.textInput}
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    paddingLeft: 6,
    fontSize: 25,
    margin:7
  }
});