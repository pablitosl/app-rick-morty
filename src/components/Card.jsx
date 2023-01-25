import React, { useEffect, useState } from 'react'


const Card = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const loadCharacters = async () => {
            const apiURL = 'https://rickandmortyapi.com/api/character'

            const res = await fetch(apiURL)
            const data = await res.json()
            const {info, results} = data;
            
            setCharacters(results)
        }
        loadCharacters()
    }, [])
  return (
    <div className='row'>
        {characters.map((character) => (
            <div className='col-12 col-sm-6 col-lg-4 col-xl-3'>
                <div key={character.id} className='card m-4'>
                    <img src={character.image} className='card-img-top p-2' alt={character.name} />
                    <div className='card-body text-center'>
                        <h5 className='card-title'>{character.name}</h5>
                        <p className='card-text'>{character.species}</p>
                        <p className='card-text'>{character.gender}</p>
                        <a href='#' className='btn btn-primary'>Go somewhere</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card