import React, { Component } from 'react';
import Goals from '../components/Goals';
import Wishlist from '../components/Wishlist';


class GoalContainer extends Component {
    render() {
        return (
            <div>
                <h1>Goals and Wishlist</h1>
                <Goals />
                <Wishlist />
            </div>
        );
    }
}

export default GoalContainer;
