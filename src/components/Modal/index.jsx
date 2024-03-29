import React from 'react'
import './styles.css'
import ButtonComponent from '../Button'
import StarIcon from '../../assets/images/star.png'

// 1 - Criar um Array vazio para inserir os dados do localStorage. 
function Modal({ valueId, onClose, image, title, position, eps, synopse, averageRating }) {
    
    const handleOutsideClick = e => {
        console.log("valor do evento: ", e.target)
        if (e.target.id === valueId) onClose()
    }

    return (
        <div key={valueId}  className='firedev-modal' onClick={handleOutsideClick}>

            <div className='firedev-modal-wrapper' id={valueId}>

                <div className='firedev-img'>
                    <img src={image} alt={title} />
                </div>

                <div className='firedev-modal-content'>
                    <button  className='btn-fd' onClick={onClose}>X</button>

                    <div className='header-text-modal'>
                        <h3>{title}</h3>    
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

                        <div className='average-content'>
                            <p>Posição: {position}</p>
                            <div className='rate'>
                                <p>
                                    <img src={StarIcon} alt='Avaliações' />
                                    Avaliação: {averageRating}
                                </p>
                                
                            </div>
                        </div>

                        <p className='eps-content'>Capitulos/Episódios: {eps}</p>
                        <h2>Sinopse</h2>

                        <div className='synopse'>
                            <p>
                                {synopse}
                            </p>
                        </div>

                    </div>


                </div>


            </div>


        </div>
    )
}

export default Modal