import React, { useState } from 'react'
import './styles.css'
import ButtonComponent from '../../components/Button'

// 1 - Criar um Array vazio para inserir os dados do localStorage. 
function Modal({ valueId, onClose, image, title, position, eps, synopse }) {
    // let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    
    /*
        2- Criar uma função que quando ocorrer o evento de click, a função será renderizada no 'onClick' selecionando os dados que eu preciso.
    EX: const titleSource = animes.attributes.canonicalTitle
    */


    const handleOutsideClick = e => {
        if (e.target.id === valueId) {
            return onClose
        }
    }

    // id, posterImage.medium, canonicalTitle, position, eps, synopse
    return (
        <div key={valueId} id={valueId} className='firedev-modal' onClick={handleOutsideClick}>

            <div className='firedev-modal-wrapper'>

                <div className='firedev-img'>
                    <img src={image} alt={title} />
                </div>

                <div className='firedev-modal-content'>

                    <div className='close-btn'>
                        <button onClick={onClose}>X</button>
                    </div>

                    <div className='header-text-modal'>
                        <h1>{title}</h1>    
                        <ButtonComponent
                            valueId={valueId}
                            img={image}
                            title={title}
                            position={position}
                            eps={eps}
                            synopse={synopse}
                            />
                    </div>

                    <div className='content-modal'>
                        <p>Posição: {position}</p>
                        <p>Capitulos/Episódios: {eps}</p>

                        <h2>Sinopse</h2>

                        <p>
                            {synopse}
                        </p>
                    </div>


                </div>


            </div>


        </div>
    )
}

export default Modal