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
        setFind(existsFindTwo)
    }, [])
    
    // const existsFind = favoriteList.find(findResult => findResult.id === valueId)
    // favorites = favoriteList
    const existsFindTwo = favoriteList.find(findResult => {
        return findResult
    })
    
    // console.log("ID Modal: ", existsFindTwo.id)
    
        //  Busca o id que corresponde a inserção, caso seja igual a um já existente ele exclui. 
    

    const checkFavorite = () => {
        const imageContainer = document.getElementById("btn-heart")
        

        console.log("Valor do find: ", find)
        // const index = favoriteList.indexOf(objs)
        const index = favoriteList.indexOf(find)
        
        

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
        // console.log("Index: ", index)

        
        
        // const favoritesFiltrado = favorites.filter(function (a) {
        //     return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        // }, Object.create(null))
        // console.log("Favoritos filtrado::::::::::: ", favoritesFiltrado)
        // // if(favoritesFiltrado === true) {
        // //     console.log("Remove o item")
        // // }

        // setFavoriteList(favoritesFiltrado)
             
        

        // favorites = favoriteList

        // O index OF de dentro da constante verifica se dentro do ARRAY "favorites"
        // existe um objeto igual o retornado. Se a condição for atendida o objeto é removido 
        // const existInFavorites = favoriteList.filter(filterResult => {
        //     const index = favorites.indexOf(filterResult)
        //     console.log("INDEX: ", index)
        //     return index
        //     // if(index == false)  {
        //     //     favoriteList.splice(index, 1)
        //     //     console.log("Remove o item")
        //     //     imageContainer.src = HeartIcon
        //     // } else {
        //     //     imageContainer.src = HeartIconRed
        //     //     console.log("Adiciona o item")
        //     // }
        // })

        
        
        
        // Se o resultado for true ele adiciona, se não, remove. 
        // if(existsFind) {
        //     favorites.push(objs)
            
        //     imageContainer.src = HeartIconRed
        //     console.log("Adiciona a bagaça")
        // } else {
        //     imageContainer.src = HeartIcon
        //     console.log("Remove po")
        // }

        // if(favoriteList === true) {
        //     console.log("Remove o item")
        // } else {
        //     console.log("Adiciona o item")
        // }   

        // console.log("Lista de favoritos: ", favorites)
        // console.log("Lista de favoritos 2: ", favoritesFiltrado)
        // console.log("Lista de favoritos 3: ", favoriteList)
        

        
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