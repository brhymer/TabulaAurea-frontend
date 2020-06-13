import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MonthContainer from '../containers/MonthContainer';
import BalanceContainer from '../containers/BalanceContainer';
import GoalContainer from '../containers/GoalContainer';
import InvestContainer from '../containers/InvestContainer';
import Login from '../Login';
import Register from '../Register';

export default (props) => (
    
        <section className="cont"><Switch> 
            {/* <Route exact path='/' component ={ Register }/> */}
            <Route path='/register' component={ Register }/>
            <Route path='/login' render={ (routeComponentProps) => {
                return <Login
                    { ...routeComponentProps }
                    currentUser={ props.currentUser }
                    storeUser={ props.storeUser }
                    />
            }} />
            <Route path='/month' component = { MonthContainer } />
            <Route path='/asli' component = { BalanceContainer } />
            <Route path='/goals' component = { GoalContainer } />
            <Route path='/invest' component = { InvestContainer } />

            </Switch></section>
   
)