import React, {Component} from 'react';
import Expense from './Expense';


class Expenses extends Component {
    render(){
    let expList = this.props.expenses.map((expense) => {
        return (
            <Expense 
                key={expense._id}
                expense={expense}
                updateExpense={this.props.updateExpense}
                deleteExpense={this.props.deleteExpense}
            />
        );
    });


    return (
        <>
            { expList }
        </>

    );
}
}

export default Expenses;
