import React from 'react'

const Pagination = () => {

    const handlePrev = () => { 
        console.log('Prev')
    }
    const handleNext = () => {
        console.log('Next')
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

export default Pagination