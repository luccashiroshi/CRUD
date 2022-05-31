import './NavItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className='navItem'>
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </Link>
    </aside>