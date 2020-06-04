import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Month from '../components/Month';
import AsLi from '../components/AsLi';
import Goals from '../components/Goals';
import Stock from '../components/Stock';

export default (
    <Switch>
        <section className="cont">
            <Route path='/month' component = { Month } />
            <Route path='/asli' component = { AsLi } />
            <Route path='/goals' component = { Goals } />
            <Route path='/invest' component = { Stock } />
        </section>
    </Switch>
)