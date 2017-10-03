import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/Input';
import CardSwiper from './src/components/CardSwiper';

export default class App extends React.Component {


  state = {
    value: '',
    jokes: []
  };

  onChangeText = value => {
    console.log(value);
    this.setState({ value });
  };

  renderSwiper() {
    debugger;
    if (this.state.jokes && this.state.jokes.length > 0) {
      return (
        <View style={styles.jokesContainer}>
        <CardSwiper
          jokes={this.state.jokes}
        />
        </View>
      );
    }
      return (
        <View style={styles.landingTextContainer}>
          <Text style={styles.landingTitle}>
            Swipe some jokes!
          </Text>
        </View>
      );

  }

  render() {
    return (
      <View style={styles.container}>

        <Input
          updateJokes={(jokes) => this.setState({ jokes })}
          value={this.state.value}
          onChangeText={this.onChangeText}
        />
        {this.renderSwiper()}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  landingTextContainer: {
    flex: 3,
    alignItems: 'flex-start',

  },
  jokesContainer: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    
  }
});
