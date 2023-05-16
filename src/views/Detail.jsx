import React, { useEffect, useState } from 'react'

const Detail = () => {

  const [characterDetail, setCharacterDetail] = useState(null)

  let query = new URLSearchParams(window.location.search);
  let characterID = query.get('characterID')
  
  

  useEffect(() => {
    const APIURL = `https://rickandmortyapi.com/api/character/${characterID}`

    fetch(APIURL)
      .then(res => res.json())
      .then(data => setCharacterDetail(data))
  }, [characterID])
  
  return (
    <>
      <h2 className='text-light fs-1 text-center '>Detail</h2>
      { characterDetail &&
        <>
          <div className='w-100 d-flex justify-content-center align-items-center'>
            <div key={characterDetail.id} className='m-4 w-50 d-flex justify-content-center align-items-center border rounded bg-light'>
              <img src={characterDetail.image} className='card-img-top p-2 rounded' alt={characterDetail.name} />
              <div className=' w-100 p-5'>
                <h5 className='card-title fs-1'>{characterDetail.name}</h5>
                <span className='status align-middle fs-5'>{characterDetail.status=='Alive'? '🟢 Alive' : '🔴 Death / Unknown'}</span>
                <p className='fs-3 m-0'>Genero: {characterDetail.gender}</p>
                <p className='fs-3 m-0'>Especie: {characterDetail.species}</p>
                <p className='fs-3 m-0'>Origen: {characterDetail.origin.name}</p>
                <p className='fs-3 m-0'>Creación: {characterDetail.created.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        </>
      }
    </>
    
  )
}

export default Detail