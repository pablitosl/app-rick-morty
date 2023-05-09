import { Route, Routes } from 'react-router-dom';
/* Estilos */

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

/* Components */
import Home from './views/Home';
import Detail from './views/Detail';
import Header from './components/Header';


function App() {

    return (
        <>
          <Header />
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/detail' element={ <Detail /> } />
          </Routes>
        </>
    )}

export default App
