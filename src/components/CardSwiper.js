import React, { Component } from 'react';
import SwipeCards from 'react-native-swipe-cards';
import JokeCard from './JokeCard';

class CardSwiper extends Component {

  handleAccept() {
    console.log('Joke liked');
  }

  handleReject() {
    console.log('This joke sucks');
  }

  render() {
    return (
      <SwipeCards
        cards={this.props.jokes}
        renderCard={(jokeObj) => <JokeCard joke={jokeObj.joke} />}
        renderNoMoreCards={() => <JokeCard joke={null} />}
        handleYup={this.handleAccept}
        handleNope={this.handleReject}
      />
    );
  }
}


export default CardSwiper;
