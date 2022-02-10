import React from 'react'
import { Link } from 'react-router-dom'
import LogoFireDev from '../../assets/images/logo.png'

import './styles.css'

const api = 'https://kitsu.io/api/edge/'

function Navbar({children}) {
    return(
        <>
        <header>
            <nav>
                <div className="firedev-nav-content">
                    <div className="firedev-menu-content">
                        <img src={LogoFireDev} alt="" />
                        <Link className='firedev-link' to={`/`}>
                            <p>Anime</p>
                        </Link>
                        <Link className='firedev-link' to={`/manga`}>
                            <p>Manga</p>
                        </Link>
                    </div>
                    <div className="firedev-nav-search">
                        {children}
                    </div>

                </div>
            </nav>

        </header>
        
        </>
    )
}

export default Navbar