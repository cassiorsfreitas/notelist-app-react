/* eslint-disable import/no-anonymous-default-export */
import './ButtonAction.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <Link to="/new-card" className="float">
            <i className="fa fa-plus"></i>
        </Link>
    )
}