import React from 'react';

export default function Character(props){
    const {characters, setCharacters} = props;
    const resetCharacters =() => {
        setCharacters(null)
    }
    return (
    <div claassName="characters">
        <h1>Personajes</h1>
        <span className='back-home' onClick={resetCharacters}>Volv er a inicio</span>

        <div className='container-characters'>
           {/*  realizo un recorrido del arreglo "characters" */}
           {characters.map((character, index) => (
            <div className='character-container' key={index}>
                <div>
                    <img src={character.image} alt={character.name}/>
                </div>

                <div>
                    <h3>{character.name}</h3>
                    {/* Muestro un span dependiendo si el personaje vive o muere */}
                <h6>{character.status === "Alive" ? (
                    <>
                    <span className='alive'/> 
                    Alive
                    </>
                ): (
                    <>
                        <span className='dead'>
                            Dead
                        </span>
                    </>
                )}</h6>

                <p>
                    <span className='text-grey'>Episodios: </span>
                    <span>{character.episode.length}</span>
                </p>

                <p>
                    <span className='text-grey'>Especie: </span>
                    <span>{character.species}</span>
                </p>
                </div>
            </div>
           ))}
        </div>
        <span className='back-home' onClick={resetCharacters}> Volver al inicio</span>
    </div>

    
    )
}