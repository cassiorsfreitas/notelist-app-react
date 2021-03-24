/* eslint-disable import/no-anonymous-default-export */
import './Header.css'
import React from 'react'
import StatCard from './StatusCard'

const header =  () =>
    <header className="header">
        <StatCard title="Created" value ="6" icon="list-ui-alt"/>
        <StatCard title="Running" value ="4" icon="clock"/>
        <StatCard title="Done" value ="2" icon="check"/>
    </header>


export default header;