import React from 'react'
import { useContext } from 'react'

import { Link } from 'react-router-dom'
import { ContextAnimes } from '../../context/context'

import Navbar from '../../components/Header/index';
import SearchInput from '../../components/Input'

import HeartIcon from '../../assets/images/heartFavorites.png'

import './styles.css';


function Animes() {
  const { anime, text, setText, info, filterResult } = useContext(ContextAnimes)
  
  return (
    <div className='firedev-full-content'>
      <div className='firedev-contents'>
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
          <div className='title-page'>
            <h3>Animes mais populares</h3>
          </div>
          {text && !info.data && (
            <span>Carregando... </span>
          )}
          {filterResult()}
      </div>
    </div>
  );
}

export default Animes;
