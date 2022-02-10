import React, { useState } from "react";
import './styles.css'
import HeartIcon from '../../assets/images/heartFavorites.png'
import HeartIconRed from '../../assets/images/heartRed.png'


const ButtonComponent = () => {
    const [like, setLike] = useState(true)

    /* Faz a chamada da imagem pela classe */
    const setImage = document.querySelector(".button-heart")

    /**
     * 1º Confere para ver se o valor do estado "like" está como "true"
     * 2º Se estiver "true" retorna a imagem com o coração vermelho. 
     */
    const checkFavorite = () => {
        like ? 
        setImage.src = HeartIconRed
        : setImage.src = HeartIcon
    }

    /* ============= Altera o "like" para o contrário ao ser executada =============  */
    const handleToggleFavorite = () => setLike((previus) => !previus)

    return (
        
        <button 
            className={`like-button`}
            src={HeartIcon}
            type="button"
            aria-label='Favoritos'
            onClick={() => handleToggleFavorite()}
            >

                <img className="button-heart" src={checkFavorite()} />

        </button>
    )
}

export default ButtonComponent