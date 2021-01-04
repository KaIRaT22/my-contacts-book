import React from 'react'
import { NavLink } from 'react-router-dom'

import './Title.css'

function Title() {
    return (
        <div className='Title'>
            <header>
            <NavLink className="nav-link" exact to="/">
                <img src={`${process.env.PUBLIC_URL}/full-logo.svg`} alt="icon" />
            </NavLink>
            </header>
        </div>
    )
}

export default Title