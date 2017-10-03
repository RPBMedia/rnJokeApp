import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios';

class Input extends Component {

  async fetchData() {
    console.log('fetching data...', this.props.value);
    const response = await axios.get(`http://api.icndb.com/jokes/random/${this.props.value}`);
    debugger;
    this.props.updateJokes(response.data.value);
    console.log(response.data);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          value={this.props.value}
          placeholder="Enter a number of jokes to fetch"
          onChangeText={this.props.onChangeText}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.fetchData.bind(this)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 20
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5,
    marginBottom: 10,
    alignSelf: 'stretch'
  },
  button: {
    backgroundColor: 'skyblue',
    height: 40,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
});

export default Input;
