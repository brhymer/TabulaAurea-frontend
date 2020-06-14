import React, { Component } from 'react';
import Liability from './Liability';

const currentUser = localStorage.getItem('userid')

class Liabilities extends Component {
    render() {
        let liabList = this.props.liabilities.filter((liability, index) => {
            return liability.userId === currentUser 
          }).map((liability, index) => {
        return (
            <Liability
                key={index}
                index={index}
                liability={liability}
                updateLiability={this.props.updateLiability}
                deleteLiability={this.props.deleteLiability}
            />
        );
    });

    return (
        <>
            { liabList }
        </>
    );
    }
}

export default Liabilities;
