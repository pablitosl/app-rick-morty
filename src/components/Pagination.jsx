/*import React from 'react'
import loadCharacters from '../services/fetch'

const Pagination = () => {

    const handlePrev = () => { 
        const {results} = loadCharacters()
        console.log(results)
    }
    const handleNext = () => {
        loadCharacters('https://rickandmortyapi.com/api/character')
        .then(({info}) => {
            loadCharacters(info.next)
                .then(({results}) => {
                console.log(results)
            })
    })
    }
    
    return (
    <div>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                    <button className="page-link" onClick={handlePrev}>Previous</button>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={handleNext}>Next</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination */