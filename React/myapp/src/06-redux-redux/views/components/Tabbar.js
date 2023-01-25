import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div className='tabbarDiv'>
                <ul>
                    <li>
                        <NavLink to="/films"
                            activeClassName="elonactive">电影</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cinemas"
                            activeClassName="elonactive"
                        >影院</NavLink>
                    </li>
                    <li>
                        <NavLink to="/center"
                            activeClassName="elonactive"
                        >我的</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
