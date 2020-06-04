import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MonthContainer from '../containers/MonthContainer';
import BalanceContainer from '../containers/BalanceContainer';
import GoalContainer from '../containers/GoalContainer';
import InvestContainer from '../containers/InvestContainer';


export default (
    <Switch>
        <section className="cont">
            <Route path='/month' component = { MonthContainer } />
            <Route path='/asli' component = { BalanceContainer } />
            <Route path='/goals' component = { GoalContainer } />
            <Route path='/invest' component = { InvestContainer } />
        </section>
    </Switch>
)