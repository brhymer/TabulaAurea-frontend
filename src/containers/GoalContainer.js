import React, { Component } from 'react';
import GoalModel from '../models/Goal';
import WishModel from '../models/Wish';
import Goals from '../components/Goals';
import Wishlist from '../components/Wishlist';
import CreateGoalForm from '../forms/CreateGoalForm';
import CreateWishForm from '../forms/CreateWishForm';

class GoalContainer extends Component {

    state = {
        goals: [],
        wishlist: []
    };

    componentDidMount() {
        this.fetchGoals();
        this.fetchWish();
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.goals !== prevState.goals) {
    //         this.fetchGoals();
    //     }
    //     if (this.state.wishlist !== prevState.wishlist) {
    //         this.fetchGoals();
    //     }
    // };

    fetchGoals = () => {
        GoalModel.all().then((res) => {
            this.setState ({
                goals: res.data.goals,
            });
        });
    }

    fetchWish = () => {
        WishModel.all().then((res) => {
            this.setState ({
                wishlist: res.data.wishlist,
            });
        });
    }

    createGoal = (name, date) => {
        let newGoal = {
            name: name,
            date: date
        };
        GoalModel.create(newGoal).then((res) => {
            let goals = this.state.goals;
            goals.push(res.data);
            this.fetchGoals();
        });
    };

    createWish = (name, reason) => {
        let newWish = {
            name: name,
            reason: reason
        };
        WishModel.create(newWish).then((res) => {
            let wishlist = this.state.wishlist;
            wishlist.push(res.data);
            this.fetchWish();
        });
    };

    updateGoal = (goalObj, goalId) => {
        const isUpdatedGoal = g => {
            return g._id === goalId;
        };

        GoalModel.update(goalId, goalObj)
        .then((res) => {
            let goals = this.state.goals;
            goals.find(isUpdatedGoal).name = goalObj.name
            this.fetchGoals();
        });
    };

    updateWish = (wishObj, wishId) => {
        const isUpdatedWish = w => {
            return w._id === wishId;
        };

        WishModel.update(wishId, wishObj)
        .then((res) => {
            let wishlist = this.state.wishlist;
            wishlist.find(isUpdatedWish).name = wishObj.name
            this.fetchWish();
        });
    };

    deleteGoal = (goal) => {
        GoalModel.delete(goal).then((res) => {
            this.fetchGoals();
        });
    };

    deleteWish = (wish) => {
        WishModel.delete(wish).then((res) => {
            this.fetchWish();
        });
    };

    render() {
        return (
            <>
                <h1>Financial Goals and Wishlist</h1>
                <div className="tb">
                    <div className="top-blurb">words words</div>
                    <section className="top"><h3>Goals</h3>
                    <span className="entry">Goal</span>
                    <span className="entry">To be achived by</span>
                        <Goals 
                            goals={this.state.goals}
                            updateGoal={this.updateGoal}
                            deleteGoal={this.deleteGoal}
                        />
                        <CreateGoalForm
                            createGoal={this.createGoal}/>
                    </section>
                    <hr />
                    <section className="bottom"><h3>Wishlist</h3>
                    <span className="entry">Item</span>
                    <span className="entry">Why I want this</span>
                        <Wishlist 
                            wishlist={this.state.wishlist}
                            updateWish={this.updateWish}
                            deleteWish={this.deleteWish}
                        />
                        <CreateWishForm
                            createWish={this.createWish}/>
                    </section>
                    <div className="top-blurb">words words</div>
                </div>
            </>
        );
    }
}

export default GoalContainer;
