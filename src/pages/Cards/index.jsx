import React, { useState } from "react";
import './styles.css'
import Modal from '../../components/Modal/index'

const CardContent = ({ value, image, title, ranking, eps, synopse, averageRating }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    if(isModalVisible) {
        console.log("abriu", isModalVisible)
    } else {
        console.log("Fechou")
    }
    
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
                        onClick={() => {
                            setIsModalVisible(true)
                        }}
                        onClose={() => setIsModalVisible(false)}
                    />
                </div>
                <div>
                    <p>{title}</p>				
                </div>
               

            </div>
            {isModalVisible ? 
                <Modal 
                    valueId={value}
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