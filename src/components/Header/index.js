import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoFireDev from '../../assets/images/logo.png'
import HeartIcon from '../../assets/images/heartFavorites.png'
import SearchIcon from '../../assets/images/search.png'
import SearchInput from '../Input'
import './styles.css'
import { useState } from 'react'

const api = 'https://kitsu.io/api/edge/'

function Navbar() {
    const [info, setInfo] = useState({})
    const [text, setText] = useState('')
    
    useEffect(() => {
        if(text) {
            fetch(`${api}/anime?filter[text]=${text}&page[limit]=12`)
                .then((response) => response.json())
                .then((response) => {
                    setInfo(response)
                    
                })
        }

    }, [text])

    return(
        <header>
            <nav>
                <div className="firedev-nav-content">
                    <div className="firedev-menu-content">
                        <img src={LogoFireDev} alt="" />
                        <Link to={`/anime`}>
                            <p>Anime</p>
                        </Link>
                        <Link to={`/manga`}>
                            <p>Manga</p>
                        </Link>
                    </div>
                    <div className="firedev-nav-search">
                        <SearchInput
                            value={text}
                            onChange={(search) => setText(search)}
                        />
                        
                        <img src={HeartIcon} alt="" />
                    </div>
                    
                </div>
            </nav>
            {info.data && (
                <ul>
                    {info.data.map((anime) => {
                        <li>
                            <img 
                                src={anime.attributes.posterImage.small} 
                                alt={anime.attributes.canonicalTitle} 
                            />
                            
                        </li>
                    })}
                </ul>
            )}
        </header>
    )
}

export default Navbar