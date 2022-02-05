import React, { useEffect, useState } from "react";
import './styles.css'
import Modal from '../../components/Modal/index'

const CardContent = ({ anime, value }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return(
        <div className='container-card-list'>
            <div className="firedev-cards-content" >
                <div onClick={() => {
                    document.addEventListener('click', handleClick => {
                        console.log(handleClick.target)
                    })
                    setIsModalVisible(true)
                }}>
                    <img 
                        key={value} 
                        value={value}
                        className='anime-images' 
                        src={anime.posterImage.small} 
                        alt={anime.canonicalTitle} 
                    />
                </div>
            <div>
                <p>{anime.canonicalTitle}</p>				
            </div>
            {isModalVisible ? 
                <Modal 
                    anime={anime} 
                    onClose={() => setIsModalVisible(false)} 
            /> : null}                           

            </div>
        </div>
    )

}

export default CardContent