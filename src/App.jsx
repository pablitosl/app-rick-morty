import imgTitle from '../src/assets/title.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Card from './components/Card';

function App() {

  return (
    <div className="app bg-dark ">
      <div className='w-100 d-flex justify-content-center '>
        <img src={imgTitle} alt="title" className='title img-fluid' />
      </div>
      <div className='container'>
        <Card />
      </div>
    </div>
  )
}

export default App
