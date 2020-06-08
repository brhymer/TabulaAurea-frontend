import React, {Component} from 'react';
import Income from './Income';


class Incomes extends Component {
    render(){
    let incList = this.props.incomes.map((income) => {
        return (
            <Income 
                key={income._id}
                income={income}
                updateIncome={this.props.updateIncome}
                deleteIncome={this.props.deleteIncome}
            />
        );
    });


    return (
        <>
            { incList }
        </>

    );
}
}

export default Incomes;
