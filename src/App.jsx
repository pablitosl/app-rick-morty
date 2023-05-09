import { Route, Routes } from 'react-router-dom';
/* Estilos */
import imgTitle from '../src/assets/title.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

/* Components */
import Card from './components/Card';
import Search from './components/Search';
import Pagination from './components/Pagination';

function App() {

  return (
    <div className="app bg-dark ">
      <div className='w-100 d-flex justify-content-center '>
        <img src={imgTitle} alt="title" className='title img-fluid' />
      </div>
      <div className='navbar'>
        <Search/>
        <Pagination/>
      </div>
      <div className='container'>
        <Card />
      </div>
    </div>
  )
}

export default App
