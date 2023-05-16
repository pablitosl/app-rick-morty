import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const keyword = e.target.keyword.value;

        if (keyword.length === 0) {
            Swal.fire('Tienes que poner un nombre')
        }else{
            e.target.keyword.value = '';
            navigate(`/results?keyword=${keyword}`)
        }
    }
    
    return (
        <div>
            <div className="container-fluid">
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="search" name='keyword' placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search