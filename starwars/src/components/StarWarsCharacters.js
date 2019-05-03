import React from 'react';
import Character from './Character';
import CharacterList from './CharacterList';
import CharacterForm from './CharacterForm';

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

]