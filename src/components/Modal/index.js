import React, { useEffect, useState } from 'react'
import './styles.css'
import Cards from '../../pages/Cards'
import axios from 'axios';
import HeartRed from '../../assets/images/heartRed.png'

const BASE_URL = 'https://kitsu.io/api/edge/trending/animes';

export const Modal = ({showModal, setShowModal}) => {
    const [anime, setAnime] = useState([])
    
    useEffect(() => {
        apiAnime()
        }, []);
        
        function apiAnime() {
          const res = axios(BASE_URL)
            .then(response => { 
              
              const data = response.data.data
              let dataLog = []
              setAnime(
                dataLog = data.map((animes) => {
                  
                  const { id, type, attributes } = animes;
                  
                  return {
                    id: id,
                    type: type,
                    description: attributes.description,
                    canonicalTitle: attributes.canonicalTitle,
                    posterImage: attributes.posterImage.medium,
                  };
                })
      
              )
      
            })
            
        }

        return (
            <div> 
              {showModal ?
              anime?.map(animes => {
                
                const { id, canonicalTitle, posterImage, description } = animes
    
                return (
                  <>
                    <div key={id} className='firedev-modal' >
                      <div className='firedev-modal-wrapper'>
                          <div className='firedev-img'>
                              <img key={id} src={posterImage} alt={canonicalTitle} />                        
                          </div>
                          <div className='firedev-modal-content'>
                              <div className='header-text-modal'>
                                  <h1>{canonicalTitle}</h1>
                                  <img className='heart-icon' src={HeartRed} alt="" />
                              </div>
                              <div className='content-modal'>
                                  <p>Posição: </p>
                                  <p>Capitulos/Episódios: </p>
      
                                  <h2>Sinopse</h2>
      
                                  <p>
                                      {description}
                                  </p>
                              </div>
      
                          </div>
                      </div>
                      
                  </div> 
                  </>
                )
              }
                
              ): null}
              
            </div>
        )
}