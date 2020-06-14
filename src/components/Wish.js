import React, { Component } from 'react';
import WishForm from '../forms/WishForm';

class Wish extends Component {
    state = {
        formStyle: {display: 'none'},
        bodyStyle: {display: 'table'},
    };

    toggleBodyForm = () => {
        (this.state.formStyle.display === 'table')
        ? this.setState({ formStyle: {display: 'none'}, bodyStyle: {display: 'table'} })
        : this.setState({ formStyle: {display: 'table'}, bodyStyle: {display: 'none'} })
    };

    deleteClickedWish = () => this.props.deleteWish(this.props.wish);

    render() {
        return (
            <li>
                <div style={this.state.bodyStyle} className={`${true ? "listy" : ""} ${this.props.index%2===0 ? "greyitem" : ""}`}>
                    <span className="list-item">{this.props.wish.name}</span>
                    <span className="list-item">{this.props.wish.reason}</span>
                    <button
                    className="edit"
                    onClick={this.toggleBodyForm}>
                        Edit
                    </button>
                    <button
                    className="remove"
                    onClick={this.deleteClickedWish}>
                        Remove
                    </button>
                </div>
                <WishForm
                    wish={ this.props.wish }
                    style={ this.state.formStyle }
                    autoFocus= { true }
                    buttonName="Update"
                    updateWish={this.props.updateWish}
                    toggleBodyForm={this.toggleBodyForm}
                />
            </li>
        );
    }
}

export default Wish;
