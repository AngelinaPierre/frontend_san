import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Sanofi from '../sanofi/sanofi'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/sanofis' component={Sanofi} />
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/sanofis' /> 
    </Router>
)
