import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import NavBar from "./components/Nav";
import "./App.css";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };

  shuffleImage = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Jumbotron></Jumbotron>
      <Wrapper>
        {this.state.images.map(image => (
          <ImageCard
            shuffleImage={this.shuffleImage}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
