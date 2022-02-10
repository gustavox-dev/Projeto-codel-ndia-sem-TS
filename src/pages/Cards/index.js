import React, { useState } from "react";
import './styles.css'
import Modal from '../../components/Modal/index'

const CardContent = ({ anime, value }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    return(
        <div className='container-card-list'>
            <div className="firedev-cards-content" >
                <div>
                    <img 
                        key={value} 
                        value={value}
                        className='anime-images' 
                        src={anime.attributes.posterImage.small} 
                        alt={anime.attributes.canonicalTitle} 
                        onClick={() => {setIsModalVisible(true)}}
                    />
                </div>
            <div>
                <p>{anime.attributes.canonicalTitle}</p>				
            </div>
            {isModalVisible ? 
                <Modal 
                    id={anime.attributes.id}
                    anime={anime} 
                    onClose={() => setIsModalVisible(false)} 
            /> : null}                           

            </div>
        </div>
    )

}

export default CardContent