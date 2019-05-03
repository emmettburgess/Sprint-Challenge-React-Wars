import React, { Component } from 'react';
import './App.css';
import Character from './components/Character';
import CharacterForm from './components/CharacterForm';
import CharacterList from './components/CharacterList';

const characters = [
  {
      name: "Luke Skywalker",
      identity: "Jedi",
      homeworld: "Tatooine",
      species: "Human",
      birth: "19 BBY",
      films: [
          "Revenge of the Sith",
          "A New Hope",
          "The Empire Strikes Back",
          "Return of the Jedi",
          "The Force Awakens",
          "The Last Jedi",
      ]
  },
  {
      name: "Leia Organa",
      identity: "Princess, General",
      homeworld: "Alderaan",
      species: "Human",
      birth: "19 BBY",
      films: [
          "Revenge of the Sith",
          "A New Hope",
          "The Empire Strikes Back",
          "Return of the Jedi",
          "The Force Awakens",
          "The Last Jedi",
      ]
  },
  {
      name: "Han Solo",
      identity: "Smuggler, General",
      homeworld: "Corellia",
      species: "Human",
      birth: "32 BBY",
      films: [
          "Revenge of the Sith",
          "A New Hope",
          "The Empire Strikes Back",
          "Return of the Jedi",
          "The Force Awakens",
          "The Last Jedi",
      ]
  },
  {
      name: "Anakin Skywalker/Darth Vader",
      identity: "Jedi, Sith Lord",
      homeworld: "Tatooine",
      species: "Human",
      birth: "41 BBY",
      films: [
          "The Phantom Menace",
          "Attack of the Clones",
          "Revenge of the Sith",
          "A New Hope",
          "The Empire Strikes Back",
          "Return of the Jedi",
      ]
  },
  {
      name: "Boba Fett",
      identity: "Bounty Hunter",
      homeworld: "Kamino",
      species: "Human (clone)",
      birth: "32 BBY",
      films: [
          "Attack of the Clones",
          "The Empire Strikes Back",
          "Return of the Jedi",
      ]
  },
  {
      name: "Rey",
      identity: "Jedi",
      homeworld: "Jakku",
      species: "Human",
      birth: "15 ABY",
      films: [
          "The Force Awakens",
          "The Last Jedi",
      ]
  },
  {
      name: "Jabba Desilijic Tiure",
      identity: "Crime Lord, Gangster",
      homeworld: "Nal Hutta",
      species: "Hutt",
      birth: "600 BBY",
      films: [
          "The Phantom Menace",
          "A New Hope",
          "Return of the Jedi",
      ]
  },

];

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          starwarsCharacters: characters,
          name: "",
          identity: "",
          homeworld: "",
          species: "",
          birth: "",
          films: "",
      };
  }

  changeHandler = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
  };

  addCharacter = e => {
      e.preventDefault();
      this.setState({
          starWarsCharacters: [
              ...this.state.starwarsCharacters,
              {
                  name: this.state.name,
                  identity: this.state.identity,
                  homeworld: this.state.homeworld,
                  species: this.state.species,
                  birth: this.state.birth,
                  films: this.state.films,
              }
          ],
          name: "",
          identity: "",
          homeworld: "",
          species: "",
          birth: "",
          films: "",
      });
  };

    render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList starwarsCharacters={this.state.starwarsCharacters} />
        <CharacterForm
          addCharacter={this.addCharacter}
          changeHandler={this.ChangeHandler}
          name={this.state.name}
          birth={this.state.birth}
          identity={this.state.identity}
          homeworld={this.state.homeworld}
          species={this.state.species}
          films={this.state.films}
          />
      </div>
    );
  }
}

export default App;
