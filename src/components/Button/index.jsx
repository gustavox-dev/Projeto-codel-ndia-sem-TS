import React, { useEffect, useState } from "react";
import './styles.css'
import HeartIcon from '../../assets/images/heartFavorites.png'
import HeartIconRed from '../../assets/images/heartRed.png'



const ButtonComponent = ({ valueId, img, title, position, eps, synopse}) => {
    const [like, setLike] = useState(false)
    const [favoriteList, setFavoriteList] = useState([{
            id: valueId, 
            image: img, 
            titulo: title,
            position: position,
            eps: eps,
            synopse: synopse
    }])
    const [find, setFind] = useState({})
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    
    console.log(favorites)
    
    // id, posterImage.medium, canonicalTitle, position, eps, synopse
    const objs = {
        id: valueId, 
        image: img, 
        titulo: title,
        position: position,
        eps: eps,
        synopse: synopse
    }
    
    useEffect(() => {
        setFavoriteList(favorites)
        setFind(existsFind)
    }, [])
    
    
    const existsFind = favoriteList.find(findResult => {
        return findResult
    })
    
    
    
    const checkFavorite = () => {
        const imageContainer = document.getElementById("btn-heart")
        JSON.parse(localStorage.getItem('favorites'))

        console.log("Valor do find: ", find)
        // Verifica se existe um objeto com o valor de 'find' dentro da Lista
        const index = favoriteList.indexOf(find)    
        
        
        // Se o valor for diferente de -1 o valor será excluído, se não, adicionado. 
        if(index != -1) {
            favoriteList.splice(index)
            imageContainer.src = HeartIcon
            console.log("remove se existir")
        }else {
            favoriteList.push(find)
            imageContainer.src = HeartIconRed
            console.log("Adiciona se não existir")

        }
        console.log("Feito o Push: ", favoriteList)
        console.log("INDEX: ", index)

        // Seta os valores para dentro do localStorage. 
        localStorage.setItem('favorites', JSON.stringify(favoriteList))
    }



    /* ======= Altera o "like" para o contrário ao ser executada =======  */
    const handleToggleFavorite = () => {
        setLike((previus) => !previus)
    }
    
    return (
        
        <button 
            className={`like-button`}
            src={HeartIcon}
            type="button"
            aria-label='Favoritos'
            onClose={() => {
                handleToggleFavorite()
            }}
            > 
                <img id="btn-heart" className="button-heart" src={HeartIcon} onClick={() => checkFavorite()}/>

        </button>
    )
}

export default ButtonComponent