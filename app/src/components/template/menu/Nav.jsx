/* eslint-disable import/no-anonymous-default-export */
import './Nav.css'
import React from 'react'
import Button from './Button'

export default props =>
    <nav className="menu-area">
        <Button text="New card"/>
        <Button text="Report"/>
    </nav>