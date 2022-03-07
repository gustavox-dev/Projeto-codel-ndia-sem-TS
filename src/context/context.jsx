import { createContext, useState, useEffect } from 'react'
import CardContent from '../pages/Cards';
import axios from 'axios'

export const ContextAnimes = createContext()

const BASE_URL = 'https://kitsu.io/api/edge/';

export function ContextProvider({children}) {
    const [anime, setAnime] = useState([])
    const [info, setInfo] = useState({})
    const [text, setText] = useState('')


    useEffect(() => { 
        const res =  axios.get(`${BASE_URL}trending/anime`)
            .then(res => {
                const animeResponse = res.data
                setAnime(animeResponse)
            })
        if(text) {
        fetch(`${BASE_URL}anime?filter[text]=${text}&page[limit]=14`)
            .then((response) => response.json())
            .then((response) => {
            setInfo(response)
            })
        } 
            
    }, [text])

    // Criar a função responsável por ler a API 

    // Criar get do localStorage

    // Criar função responsável por mudar a cor do botão
    
    const filterAnime = () => {

        return(
        <>
            {anime.data && 
                <div className="firedev-animes-content">

                    {anime.data.map(animes => (
                        <CardContent 
                            key={animes.id} 
                            value={animes.id} 
                            image={animes.attributes.posterImage.small}
                            title={animes.attributes.canonicalTitle}
                            ranking={animes.attributes.popularityRank}
                            eps={animes.attributes.episodeCount}
                            synopse={animes.attributes.synopsis}
                            averageRating={animes.attributes.averageRating}
                        />
                    ))}
                
                </div>
            }
        </>
        )
    }

    const filteredAnimes = () => {
        
        return(
        <>
            {info.data && 
                <div className="firedev-animes-content">
                    {info.data.map(animes => (
                        <CardContent 
                            key={animes.id} 
                            value={animes.id} 
                            image={animes.attributes.posterImage.small}
                            title={animes.attributes.canonicalTitle}
                            ranking={animes.attributes.popularityRank}
                            eps={animes.attributes.episodeCount}
                            synopse={animes.attributes.synopsis}
                            averageRating={animes.attributes.averageRating}
                        />
                        
                    ))}
                </div>
            }
        </>
        )
    }

    const filterResult = () => {
        if(text !== '') {
        return filteredAnimes()
        }
        else {
        return filterAnime()
        }
    }

    return(
        <ContextAnimes.Provider value={{anime, text, setText, info, filterResult}}>
            {children}
        </ContextAnimes.Provider>
    )
}