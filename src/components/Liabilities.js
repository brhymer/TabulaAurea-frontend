import React, { Component } from 'react';
import Liability from './Liability';

class Liabilities extends Component {
    render() {
    let liabList = this.props.liabilities.map((liability) => {
        return (
            <Liability
                key={liability._id}
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
