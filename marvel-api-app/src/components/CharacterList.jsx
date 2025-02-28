import { useEffect, useState } from 'react';
import axios from 'axios';
import { func } from 'prop-types';
import './character-styles.css';

const CharacterList = ({ setSelectedCharacter }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCharacters();
    }, []);
    
    
    const fetchCharacters = async () => {
        try {
            const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=59471b5628a86c37c005096dce883a87&hash=a126744fc83299d209c4870c5df6fe77');
            setCharacters(response.data.data.results);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    }
    
      return (
        <div>
            <div className="character-grid">
                {characters.map(character => (
                    <div key={character.id}
                        onClick={() => handleCharacterClick(character)}>
                        <h4>{character.name}</h4>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                         alt={`${character.name}`} />
                    </div>
                ))}
            </div>
        </div>
      );
    };
    
    
CharacterList.propTypes = {
    setSelectedCharacter: func
}

export default CharacterList;