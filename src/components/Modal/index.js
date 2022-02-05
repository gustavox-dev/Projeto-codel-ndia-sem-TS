import React, { useEffect, useState } from 'react'
import './styles.css'
import HeartRed from '../../assets/images/heartRed.png'

const Modal = ({ anime, onClose, value }) => {
    
    console.log(anime)

    return (
        <div key={value} className='firedev-modal' onClick={onClose}>
            
            <div className='firedev-modal-wrapper'>
                <div className='firedev-img'>
                    <img src={anime.posterImage.medium} alt='' />                        
                </div>
                <div className='firedev-modal-content'>
                    <div className='header-text-modal'>
                        <h1>{anime.canonicalTitle}</h1>
                        <img className='heart-icon' src={HeartRed} alt="" />
                    </div>
                    <div className='content-modal'>
                        <p>Posição: {anime.popularityRank}</p>
                        <p>Capitulos/Episódios: {anime.episodeCount}</p>

                        <h2>Sinopse</h2>

                        <p>
                            {anime.synopsis}
                        </p>
                    </div>

                </div>
            </div>
        
        </div> 
    )
}

export default Modal