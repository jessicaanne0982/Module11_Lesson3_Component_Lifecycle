import { useState } from 'react'
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';


const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return(
    <div>
      <h1>Marvel Characters</h1>
      <CharacterDetail character={selectedCharacter} />
      <CharacterList setSelectedCharacter={setSelectedCharacter} />

    </div>
  );
};

export default App;
