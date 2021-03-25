import './CardCrud.css'
import React, { Component } from 'react'

const headerProps = {
    icon: 'list',
    title: 'Cards',
    subtitle: 'Lorem Ipsum Subtitle'
}

export default class CardCrud extends Component {
    render () {
        return (
            <div className="container">

                <div className="cardCrud">
                    Simple Card
                </div>

            </div>
        )
    }
}