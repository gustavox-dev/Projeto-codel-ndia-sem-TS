import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Navbar from '../../components/Header/index';
import SearchInput from '../../components/Input'
import CardContent from '../Cards/index';

import HeartIcon from '../../assets/images/heartFavorites.png'

import './styles.css';

const BASE_URL = 'https://kitsu.io/api/edge/';

function Animes() {
  
  const [anime, setAnime] = useState([])
  
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')

  useEffect(() => { 
    const res =  axios.get(`${BASE_URL}trending/anime`)
        .then(res => {
            const animeResponse = res.data
            setAnime(animeResponse)
        })
    if(text) {
      fetch(`${BASE_URL}anime?filter[text]=${text}&page[limit]=12`)
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
                  <CardContent key={animes.id} value={animes.id} anime={animes.attributes}/>
                
              ))}
            </div>
          }
      </>
    )
  }

  const filterAnime = () => {

    return(
      <>
        {anime.data && 
          <div className="firedev-animes-content">

          {anime.data.map(animes => {
            const {attributes, id} = animes

            return (
              <CardContent key={id} value={id} anime={attributes}/>
            )
          })}
          
          </div>
        }
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
                
              <button 
                src={HeartIcon}
                type="button"
                aria-label='Favoritos'
              >
                <Link to={'/favorites'}>
                  <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.0688 2.46457C21.9078 -0.193247 17.0242 0.205971 14 3.28488C10.9758 0.205971 6.09219 -0.198716 2.93126 2.46457C-1.18124 5.92628 -0.579681 11.57 2.35157 14.5614L11.9438 24.3341C12.4906 24.8919 13.2234 25.2036 14 25.2036C14.782 25.2036 15.5094 24.8974 16.0563 24.3396L25.6484 14.5669C28.5742 11.5755 29.1867 5.93175 25.0688 2.46457Z" fill="#FAFAFA"/>
                  </svg>
                </Link>

              </button>

            </SearchInput>
          </Navbar>
        </div>
        <div>
          <h3>Animes mais populares</h3>
        </div>
        {filterResult()}
    </div>
  );
}

export default Animes;
