import imageRickMorty from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Character from "./Components/Character";

function App() {
  const [characters, setCharacters]=useState(null)

  const reqapi =async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    
    const CharacterApi = await api.json();
    
    setCharacters(CharacterApi.results)
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='title'>Rick & morty</h1>
       {/* si characters tiene datos muestra  el componenete de characters, si no muestra lo demas paso los datos
       zl componente character con parametros como se muestra abajoo */}
       {characters ? (
          <Character characters={characters} setCharacters={setCharacters}></Character>
        ) : (
        <>
        <img src={imageRickMorty} alt="Rick & morty" className="img-home"></img>
        <button className="btn-search" onClick={reqapi} >Buscar personajes</button>
        </>
       )}
       
       
      </header>
    </div>
  );
}

export default App;
