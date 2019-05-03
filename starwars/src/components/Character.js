import React from 'react';
import Identity from './Identity';

const Character = props => {
    return (
        <div className="character-card">
        <img src={props.character.img} alt="" />
        <div className="character-info">
            <h3>{props.character.name}</h3>
            <Identity character={props.character} />
            <p>
                <strong>Birth Year:</strong> {props.character.birth}
            </p>
            <p>
                <strong>Identity:</strong> {props.character.birth}
            </p>
            <p>
                <strong>Homeworld:</strong> {props.character.homeworld}
            </p>
            <p>
                <strong>Species:</strong> {props.character.species}
            </p>
            <p>
                <strong>Films:</strong> {props.character.films.join()}
            </p>
        </div>
        </div>
    );
};

export default Character;