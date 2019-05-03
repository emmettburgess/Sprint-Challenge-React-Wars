import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div className="character-list">
            {props.starwarsCharacters.map(item => (
                <Character character={item} key={item.name} />
            ))}
        </div>
    );
};

export default CharacterList;