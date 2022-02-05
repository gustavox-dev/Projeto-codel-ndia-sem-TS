import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../../components/Header/index';
import './styles.css';
import CardContent from '../Cards/index';

const BASE_URL = 'https://kitsu.io/api/edge/trending/animes';

function Animes() {
  const [anime, setAnime] = useState([])

  useEffect(() => { 
    const res =  axios.get(BASE_URL)
        .then(res => {
            const animeResponse = res.data.data
            setAnime(animeResponse)
        })
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        <h3>Animes mais populares</h3>
      </div>
      <div className="firedev-animes-content">
        {anime.map(animes => {
          const {attributes, id} = animes

          return (
            <CardContent value={id} anime={attributes}/>
          )
        })}
      </div>
    </div>
  );
}

export default Animes;
