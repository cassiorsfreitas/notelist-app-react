import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../components/template/content/Home'
import CardCrud from '../components/card/CardCrud'


const routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/new-card' component={CardCrud} />
        <Route path='/cards/:id' component={CardCrud} />
        <Redirect from='*' to='/' />
    </Switch>
)

export default routes