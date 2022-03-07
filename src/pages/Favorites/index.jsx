import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextAnimes } from '../../context/context'

import axios from 'axios'

import Navbar from '../../components/Header/index';
import SearchInput from '../../components/Input'
import CardContent from '../Cards/index';
import HeartIconRed from '../../assets/images/heartRed.png'

const BASE_URL = 'https://kitsu.io/api/edge/';
function Favorites() {
  const { anime, text, setText, info} = useContext(ContextAnimes)  
  console.log(info)
  let lsItems = JSON.parse(localStorage.getItem('favorites'))
  

  const filteredAnimes = () => {
    
    return(
      <>
        <div className="firedev-animes-content">
              {lsItems.map(animes => (
                  <CardContent key={animes.id} value={animes.id} anime={animes} attributes={animes.attributes}/>
                
              ))}
            </div>
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
