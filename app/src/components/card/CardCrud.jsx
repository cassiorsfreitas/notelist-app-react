import React, { Component } from 'react'
import Main from '../template/content/Main'

const headerProps = {
    icon: 'list',
    title: 'Cards',
    subtitle: 'Lorem Ipsum Subtitle'
}

export default class CardCrud extends Component {
    render () {
        return (
            <Main {...headerProps}>
                Simple Card
            </Main>
        )
    }
}