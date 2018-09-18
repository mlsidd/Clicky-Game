import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import NavBar from "./components/Nav";
import "./App.css";
import ScoreCounter from "./components/ScoreCounter";
import Jumbotron from "./components/Jumbotron";


let numOfMoves = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images: images,
    unclickedImages: images,
    numOfMoves: numOfMoves,
  }
  
  // cards should be shuffled every time a card is clicked
  // game should know if the clicked card has already been clicked
  // game should display total number of moves  so far
  // when player starts brand new game, no cards should be listed as clicked and score should be set to 0
  // restart button should allow user to start from sratch with score at 0 and no cards have been clicked
  checkForClick = image => {
    // Check to see if the currently clicked image has never been clicked by seeing if it is in the unclicked array
    if(this.state.unclickedImages.includes(image.id))  {
      // if it has never been clicked, create a new unclicked array by filtering the current image id out
      const unclickedImages = this.state.images.filter(id => image.id !== id);
      console.log(unclickedImages);
      // increase the # of moves by 1
      numOfMoves = numOfMoves + 1;
      console.log(numOfMoves);
      // set the current state so that it now knows the array of remaining unclicked images
      this.setState({ 
        unclickedImages: unclickedImages,
        numOfMoves: numOfMoves
      });
    } else {
        this.setState({
          unclickedImages: images,
          numOfMoves: 0,
          message: "Game Over!"
        });
  };
}

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Jumbotron></Jumbotron>
      <Wrapper>
        {this.state.images.map(image => (
          <ImageCard
            checkForClick={this.checkForClick}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </Wrapper>
    </div>
    );
  };
}

export default App;
