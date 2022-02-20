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
  const [dados, setDados] = useState()

  // console.log(anime.data)

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
                  <CardContent 
                    key={animes.id} 
                    value={animes.id} 
                    image={animes.attributes.posterImage.small}
                    title={animes.attributes.canonicalTitle}
                    ranking={animes.attributes.popularityRank}
                    eps={animes.attributes.episodeCount}
                    synopse={animes.attributes.synopsis}
                  />
                
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

          {anime.data.map(animes => (
            <CardContent 
              key={animes.id} 
              value={animes.id} 
              image={animes.attributes.posterImage.small}
              title={animes.attributes.canonicalTitle}
              ranking={animes.attributes.popularityRank}
              eps={animes.attributes.episodeCount}
              synopse={animes.attributes.synopsis}
            />
          ))}
          
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
              <Link to={'/favoritos'}>
                <img className='heart' src={HeartIcon} alt=''/>
              </Link>
              

            </SearchInput>
          </Navbar>
        </div>
        <div>
          <h3>Animes mais populares</h3>
        </div>
        {text && !info.data && (
          <span>Carregando... </span>
        )}
        {filterResult()}
    </div>
  );
}

export default Animes;
