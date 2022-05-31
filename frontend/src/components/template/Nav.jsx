import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
        <aside className="menu-area">
                <nav className='menu'>
                        <NavItem icon="home" title="Início" path="/" />
                        <NavItem icon="users" title="Usuários" path="/users" />
                </nav>
        </aside>
