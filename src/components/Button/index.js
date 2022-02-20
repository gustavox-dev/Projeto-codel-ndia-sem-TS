import React, { useEffect, useState } from "react";
import './styles.css'
import HeartIcon from '../../assets/images/heartFavorites.png'
import HeartIconRed from '../../assets/images/heartRed.png'



const ButtonComponent = ({ valueId, img, title, position, eps, synopse}) => {
    const [like, setLike] = useState(false)
    const [favoriteList, setFavoriteList] = useState([])
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []

    
    

    
   

    /**
     * 1º Confere para ver se o valor do estado "like" está como "true"
     * 2º Se estiver "true" retorna a imagem com o coração vermelho. 
     */
    const checkFavorite = () => {
        const imageContainer = document.getElementById("btn-heart")
        
        // id, posterImage.medium, canonicalTitle, position, eps, synopse
        const objs = {
            id: valueId, 
            image: img, 
            titulo: title,
            position: position,
            eps: eps,
            synopse: synopse
        }


        // Busca o valor via indexOf, caso não 
        const index = favoriteList.indexOf(valueId)
        // console.log("Index: ", index)

        favorites.push(objs)
        const favoritesFiltrado = favorites.filter(function (a) {
            return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null))

        setFavoriteList(favoritesFiltrado)
             
        


    
        favorites = favoritesFiltrado
        
        const existInFavorites = favoritesFiltrado.indexOf({})

        console.log("Existe dentro do array? ", existInFavorites)

        if(favoritesFiltrado) {
            console.log("Remove o item")
        } else {
            console.log("Adiciona o item")
        }   

        console.log("Lista de favoritos: ", favorites)
        

        
            // console.log("Valor index: ", index)
            // console.log("Valor ID: ", favorites.id)
            // if(index !== favorites.id) {
            //     imageContainer.src = HeartIcon
            //     console.log("Removendo item com splice", favoriteList)
            // } else {
            //     imageContainer.src = HeartIconRed
            //     console.log("Fazendo push no Array favorites: ", favoriteList)
            // }
        
        

        // Inserir o updateLocalStorage
        localStorage.setItem('favorites', JSON.stringify(favorites))
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