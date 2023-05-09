import React from 'react'
import img from '/src/assets/title.png'

import Search from './Search';
import Pagination from './Pagination';

const Header = () => {
    return (
        <>
        <div className="app bg-dark">
            <header className='w-100 d-flex justify-content-center '>
                <img src={img} alt="title" className='title img-fluid' />
            </header>
            <section className='navbar'>
                <Search/>
                <Pagination/>
            </section>
        </div>
        </>
    )
}

export default Header