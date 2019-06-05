/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    text: ''
  }

  render() {
    return (
      <View style={styles.container} testID='view-home'>
        <Text style={styles.welcome}>Detox TEST</Text>
        <Button
          title='Awesome Button!'
          accessibilityLabel='dummy_btn'
          testID='home-main-btn'
          onPress={()=>{
            this.setState({
              text: "hola bebe"
            });
          }}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          testID='home-primary-text-input'
        />
        {this.state.text.length > 3 &&
          <Text style={styles.hideText}
            testID='home-hiden-text'
          >
            Secret text!
          </Text>
        }
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
  hideText: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  textInput: {
    width: '80%',
    height: '5%', 
    borderColor: 'gray', 
    borderWidth: 1
  }
});
