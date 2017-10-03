import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class JokeCard extends Component {

  renderJoke() {


  }

  render() {
    if (this.props.joke) {
      return (
        <View style={styles.cardContainer}>
          <Text>{this.props.joke}</Text>
        </View>

      );
    }

    return (
      <View style={styles.emptyCardContainer}>
        <Text>No more jokes buddy... get back to work!</Text>
      </View>

    );

  }
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 1,
    backgroundColor: 'gold',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  emptyCardContainer: {
    height: 200,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  }
});

export default JokeCard;
