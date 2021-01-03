import React from 'react'
import { NavLink } from 'react-router-dom'

import RandomSpace from '../RandomSpace/RandomSpace'
import './Title.css'

function Title() {
    return (
        <div className='Title'>
            <header>
                <h1>TITLE</h1>
                <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>

                <RandomSpace />
                <div>
                    <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/">List</NavLink>
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/about">About</NavLink>
                </div>
            </header>
        </div>
    )
}

export default Title