import React from 'react';

const CharacterForm = props => {
    return (
        <form onSubmit={props.addCharacter}>
            <input
                name="name"
                placeholder="Name"
                value={props.name}
                onChange={props.changeHandler}
            />
            <input
                name="identity"
                placeholder="Hero or Villain?"
                value={props.identity}
                onChange={props.changeHandler}
            />
            <input
                name="homeworld"
                placeholder="Homeworld"
                value={props.homeWorld}
                onChange={props.changeHandler}
            />
            <input
                name="species"
                placeholder="Species"
                value={props.species}
                onChange={props.changeHandler}
            />
            <input
                name="img"
                placeholder="Picture"
                value={props.img}
                onChange={props.changeHandler}
            />

            <button type="submit">Add Character</button>
        </form>
    );
};

export default CharacterForm;