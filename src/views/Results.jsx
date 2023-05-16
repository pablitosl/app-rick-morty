import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Results = () => {

    let navigate = useNavigate();

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword')

    const [results, setResults] = useState([])

    useEffect(() => {
    const API_URL = `https://rickandmortyapi.com/api/character/?name=${keyword}`

    fetch(API_URL)
            .then(response => response.json())
            .then(data => data.results)
            .then(array => {
                if(!array){
                    Swal.fire('No hay resultados de tu búsqueda')
                    navigate('/')
                }
                setResults(array)
            })
    }, [keyword])

return (
    <div className='container'>
        <h2 className='text-light fs-1 text-center '>Results</h2>
        <div className='row'>
            {
                results.map((result) => (
                    <div key={result.id} className='col-12 col-sm-6 col-lg-4 col-xl-3'>
                        <div  className='card m-4'>
                            <img src={result.image} className='card-img-top p-2 rounded' alt={result.name} />
                            <div className='card-body text-center'>
                                <h5 className='card-title fs-2'>{result.name}<span className='status align-middle'>{result.status=='Alive'? '🟢' : '🔴'}</span></h5>
                                <p className='card-text fs-5'>{result.gender}</p>
                                <p className='card-text fs-5'>{result.species}</p>
                                
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    
)
}

export default Results