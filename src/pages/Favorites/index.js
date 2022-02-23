import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import Navbar from '../../components/Header/index';
import SearchInput from '../../components/Input'
import CardContent from '../Cards/index';
import HeartIconRed from '../../assets/images/heartRed.png'

const BASE_URL = 'https://kitsu.io/api/edge/';

function Favorites() {
  const [anime, setAnime] = useState([])
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')
  

  let lsItems = JSON.parse(localStorage.getItem('favorites'))
  console.log(lsItems)

  useEffect(() => { 
    const res =  axios.get(`${BASE_URL}trending/anime`)
        .then(res => {
            const animeResponse = res.data
            setAnime(animeResponse)
        })
    if(text) {
      fetch(`${BASE_URL}anime?filter[text]=${text}&page[limit]=14`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response)
        })
    } 
        
  }, [text])


  const filteredAnimes = () => {
    
    return(
      <>
        {info.data && 
            <div className="firedev-animes-content">
              {info.data.map(animes => (
                  <CardContent key={animes.id} value={animes.id} anime={animes} attributes={animes.attributes}/>
                
              ))}
            </div>
          }
      </>
    )
  }

  const filterAnime = () => {

    return(
      <>
        
          <div className="firedev-animes-content">

          {lsItems.map(favoriteList => {
            const {id, image, titulo, position, synopse, eps} = favoriteList

            return (
              <CardContent 
                key={id} 
                value={id}                
                image={image}
                title={titulo}
                ranking={position}
                eps={eps}
                synopse={synopse}
              />
            )
          })}
          
          </div>
        
      </>
    )
  }


  const filterResult = () => {
    if(text !== '') {
      return filteredAnimes()
    }
    else {
      return filterAnime()
    }
  }


  return (
    <div>
      <div className='firedev-navbar'>
        <Navbar anime={anime}>
          <SearchInput
              value={text}
              onChange={(search) => setText(search)}
              animes={anime}
            >
              <Link to={'/favoritos'}>
                <img className='heart' src={HeartIconRed} alt=''/>
              </Link>
              

            </SearchInput>
          </Navbar>
        </div>
        <div>
          <h3>Seus animes favoritos</h3>
        </div>
        {text && !info.data && (
          <span>Carregando... </span>
        )}
        {filterResult()}
    </div>
  );
}

export default Favorites;
