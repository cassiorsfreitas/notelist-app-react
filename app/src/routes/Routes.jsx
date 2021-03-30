import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../components/template/content/Home'
import CardCrud from '../components/card/CardCrud'
import ViewCard from '../components/card/ViewCard'


const routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/new-card' component={CardCrud} />
        <Route path='/cards/:id' component={ViewCard} />
        <Redirect from='*' to='/' />
    </Switch>
)

export default routes