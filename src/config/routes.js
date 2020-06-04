import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MonthContainer from '../components/MonthContainer';
import AsLi from '../components/AsLi';
import Goals from '../components/Goals';
import Stock from '../components/Stock';

export default (
    <Switch>
        <section className="cont">
            <Route path='/month' component = { MonthContainer } />
            <Route path='/asli' component = { AsLi } />
            <Route path='/goals' component = { Goals } />
            <Route path='/invest' component = { Stock } />
        </section>
    </Switch>
)