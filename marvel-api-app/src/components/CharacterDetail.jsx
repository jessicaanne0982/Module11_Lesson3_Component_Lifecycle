import { func } from 'prop-types';
import './character-styles.css';

const CharacterDetail = ({ character }) => {

    if (!character) return <p>Select a character to see details</p>;

    return (
        <div className="character-details">
            
            <h2>{character.name}</h2>
            <p>{character.description || 'No description available.'}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.items.length > 0 ? (character.comics.items.map((comic, index) => (
                        <li key={index}>{comic.name}</li> ))) : (<p>No comics available for this character.</p>)}
            </ul>
        </div>
    );

};

CharacterDetail.propTypes = {
    character: func
}


export default CharacterDetail;
