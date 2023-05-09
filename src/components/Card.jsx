import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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
                        <img src={character.image} className='card-img-top p-2 rounded' alt={character.name} />
                        <div className='card-body text-center'>
                            <h5 className='card-title fs-2'>{character.name}<span className='status align-middle'>{character.status=='Alive'? '🟢' : '🔴'}</span></h5>
                            <p className='card-text fs-5'>{character.gender}</p>
                            <p className='card-text fs-5'>{character.species}</p>
                            <Link to='/detail' className='btn btn-primary'>View detail</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card