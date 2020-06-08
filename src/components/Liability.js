import React, { Component } from 'react';
import LiabilityForm from '../forms/LiabilityForm';

class Liability extends Component {
    state = {
        formStyle: {display: 'none'},
        bodyStyle: {}
    };

    toggleBodyForm = () => {
        (this.state.formStyle.display === 'block')
        ? this.setState({ formStyle: {display: 'none'}, bodyStyle: {display: 'block'} })
        : this.setState({ formStyle: {display: 'block'}, bodyStyle: {display: 'none'} })
    };

    deleteClickedLiability = () => this.props.deleteLiability(this.props.liability)

    render() {
        return (
            <li>
                <div style={this.state.bodyStyle}>
                    <span className="list-item">{this.props.liability.name}</span>
                    <span className="list-item">{this.props.liability.value}</span>
                    <span className="list-item">{this.props.liability.intRate}</span>
                    <button
                    className="edit"
                    onClick={this.toggleBodyForm}>
                        edit
                    </button>
                    <button
                    className="remove"
                    onClick={this.deleteClickedLiability}>
                        remove
                    </button>
                </div>
                <LiabilityForm
                    liability={ this.props.liability }
                    style={ this.state.formStyle }
                    autoFocus={ true }
                    buttonName="Update"
                    updateLiability={this.props.updateLiability}
                    toggleBodyForm={this.toggleBodyForm}
                />
            </li>
        );
    }
}

export default Liability;
