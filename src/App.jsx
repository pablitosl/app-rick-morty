import { Route, Routes } from 'react-router-dom';
/* Estilos */

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

/* Components */
import Home from './views/Home';
import Detail from './views/Detail';
import Header from './components/Header';
import Results from './views/Results';


function App() {

    return (
        <>
          <Header />
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/detail' element={ <Detail /> } />
            <Route path='/results' element={ <Results /> } />
          </Routes>
        </>
    )}

export default App
