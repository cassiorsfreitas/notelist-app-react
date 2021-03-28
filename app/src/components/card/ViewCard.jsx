import './ViewCard.css'
import React, { Component } from 'react'
import axios from 'axios'


const baseUrl = 'http://localhost:3001/cards'
const initialState = {
    list: []
}

export default class ViewCard extends Component{

    state = {...initialState}

    componentWillMount () {
        axios(baseUrl).then ( resp => {
            this.setState({list: resp.data})
        })
    }
    
    render() {
        const { id } = this.props.match.params;
        const card = this.state.list[id]
        console.log(card)
        return (
            <div className="container">
                {id}
            </div>
        )
    }
}