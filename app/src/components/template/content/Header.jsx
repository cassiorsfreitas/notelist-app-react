/* eslint-disable import/no-anonymous-default-export */
import './Header.css'
import React from 'react'
import StatCard from './StatusCard'

const header =  () =>
    <header className="header">
        <StatCard title="Created" value ="6"/>
        <StatCard title="Opened" value ="4"/>
        <StatCard title="Closed" value ="2"/>
    </header>


export default header;