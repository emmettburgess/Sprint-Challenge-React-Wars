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
                placeholder="Identity"
                value={props.identity}
                onChange={props.changeHandler}
            />
            <input
                name="homeworld"
                placeholder="Homeworld"
                value={props.homeworld}
                onChange={props.changeHandler}
            />
            <input
                name="species"
                placeholder="Species"
                value={props.species}
                onChange={props.changeHandler}
            />
            <input
                name="films"
                placeholder="Film Appearances"
                value={props.films}
                onChange={props.changeHandler}
            />
            <input
                name="birth"
                placeholder="Birth Year"
                value={props.birth}
                onChange={props.changeHandler}
            />

            <button type="submit">Add Character</button>
        </form>
    );
};

export default CharacterForm;