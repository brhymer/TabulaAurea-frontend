import React, { Component } from 'react';
import WishForm from '../forms/WishForm';

class Wish extends Component {
    state = {
        formStyle: {display: 'none'},
        bodyStyle: {},
    };

    toggleBodyForm = () => {
        (this.state.formStyle.display === 'block')
        ? this.setState({ formStyle: {display: 'none'}, bodyStyle: {display: 'block'} })
        : this.setState({ formStyle: {display: 'block'}, bodyStyle: {display: 'none'} })
    };

    deleteClickedWish = () => this.props.deleteWish(this.props.wish);

    render() {
        return (
            <li>
                <div style={this.state.bodyStyle}>
                    <span className="list-item">{this.props.wish.name}</span>
                    <span className="list-item">{this.props.wish.reason}</span>
                    <button
                    className="edit"
                    onClick={this.toggleBodyForm}>
                        Edit
                    </button>
                    <button
                    className="remove"
                    onClick={this.deleteclickedWish}>
                        Remove
                    </button>
                </div>
                <WishForm
                    wish={ this.props.wish }
                    style={ this.state.formStyle }
                    autoFocus= { true }
                    buttonName="Update"
                    updateGoal={this.props.updateWish}
                    toggleBodyForm={this.toggleBodyForm}
                />
            </li>
        );
    }
}

export default Wish;
