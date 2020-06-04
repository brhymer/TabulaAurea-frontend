import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MonthContainer from '../components/MonthContainer';
import BalanceContainer from '../components/BalanceContainer';
import GoalContainer from '../components/GoalContainer';
import InvestContainer from '../components/InvestContainer';


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