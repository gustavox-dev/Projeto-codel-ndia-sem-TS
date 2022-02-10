import React from 'react'
import './styles.css'
import ButtonComponent from '../../components/Button'

const Modal = ({id, anime, onClose, value }) => {

    const handleOutsideClick = e => {
        if(e.target.id === id ) {
            return onClose
        }
    }

    return (
        <div key={value} id={anime.id} className='firedev-modal' onClick={handleOutsideClick}>
            
            <div className='firedev-modal-wrapper'>
                
                <div className='firedev-img'>
                    <img src={anime.attributes.posterImage.medium} alt='' />                        
                </div>
                <div className='firedev-modal-content'>

                    <div className='close-btn'>
                        <button onClick={onClose}>XXXXX</button>
                    </div>

                    <div className='header-text-modal'>
                        <h1>{anime.attributes.canonicalTitle}</h1>
                        <ButtonComponent />
                    </div>

                    <div className='content-modal'>
                        <p>Posição: {anime.attributes.popularityRank}</p>
                        <p>Capitulos/Episódios: {anime.attributes.episodeCount}</p>

                        <h2>Sinopse</h2>

                        <p>
                            {anime.attributes.synopsis}
                        </p>
                    </div>

                
                </div>


            </div>

            
        </div> 
    )
}

export default Modal