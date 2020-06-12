import React, {Component} from 'react';
import Income from './Income';


class Incomes extends Component {
    render(){
    let incList = this.props.incomes.map((income, index) => {
        return (
            <Income 
                key={index}
                index={index}
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
