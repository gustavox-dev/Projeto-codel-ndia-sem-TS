import React, { useState } from "react";
import './styles.css'
import Modal from '../../components/Modal/index'

const CardContent = ({ anime, value, image, title, ranking, eps, synopse, averageRating }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    // const [favorites, setFavorites] = useState([anime])

    // function handleAddItem(value, attributes) {
    //     const itemObject = { value, attributes }
    //     setFavorites([...favorites, itemObject])
    // }
    // console.log(favorites)
    
    return(
        <div className='container-card-list'>
            <div className="firedev-cards-content" >
                <div>
                    <img 
                        key={value} 
                        value={value}
                        className='anime-images' 
                        src={image} 
                        alt={title} 
                        onClick={() => {setIsModalVisible(true)}}
                    />
                </div>
                <div>
                    <p>{title}</p>				
                </div>
               

            </div>
            {isModalVisible ? 
                        <Modal 
                            valueId={value}
                            anime={anime} 
                            image={image}
                            title={title}
                            position={ranking}
                            eps={eps}
                            synopse={synopse}
                            averageRating={averageRating}
                            // handleAddItem={handleAddItem()}
                            onClose={() => setIsModalVisible(false)} 
                    /> : null} 
        </div>
    )

}

export default CardContent