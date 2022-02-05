import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoFireDev from '../../assets/images/logo.png'
import HeartIcon from '../../assets/images/heartFavorites.png'
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
        <>
        <header>
            <nav>
                <div className="firedev-nav-content">
                    <div className="firedev-menu-content">
                        <img src={LogoFireDev} alt="" />
                        <Link className='firedev-link' to={`/anime`}>
                            <p>Anime</p>
                        </Link>
                        <Link className='firedev-link' to={`/manga`}>
                            <p>Manga</p>
                        </Link>
                    </div>
                    <div className="firedev-nav-search">
                        <SearchInput
                            value={text}
                            onChange={(search) => setText(search)} />

                        <img src={HeartIcon} alt="" />
                    </div>

                </div>
            </nav>

        </header>
        
        <div>
        
        </div>
        
        </>
    )
}

export default Navbar