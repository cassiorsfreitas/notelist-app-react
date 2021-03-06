/* eslint-disable import/no-anonymous-default-export */
import './Header.css'
import React from 'react'
import StatCard from './StatusCard'

const header = (props) =>
    <header className="header">
        <StatCard title="Created" value={props.created} icon="list-ui-alt"/>
        <StatCard title="Running (draft)" value ={props.running} icon="clock"/>
        <StatCard title="Done (draft)" value ={props.closed} icon="check"/>
    </header>


export default header;