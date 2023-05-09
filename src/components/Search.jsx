import React from 'react'
import Swal from 'sweetalert2'

const Search = () => {

    const API_URL = `https://rickandmortyapi.com/api/character/?name=rick`

    const handleSubmit = (e) => {
        e.preventDefault()

        const keyword = e.target.keyword.value;
        console.log(keyword)
        if (keyword.length === 0) {
            Swal.fire('Tienes que poner un nombre')
        }else{
            fetch(API_URL)
            .then(response => response.json())
            .then(data => console.log(data))
        }
    }
    
    return (
        <div>
            <div class="container-fluid">
                <form class="d-flex" onSubmit={handleSubmit}>
                    <input class="form-control me-2" type="search" name='keyword' placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search