import React from 'react'
import img from '/src/assets/title.png'

import Search from './Search';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className="app bg-dark">
            <header className='w-100 d-flex justify-content-center '>
                <Link to={('/')}><img src={img} alt="title" className='title img-fluid' /></Link>
                
            </header>
            <section className='navbar'>
                <Search/>
            </section>
        </div>
        </>
    )
}

export default Header