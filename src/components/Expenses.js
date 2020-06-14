import React, {Component} from 'react';
import Expense from './Expense';

const currentUser = localStorage.getItem('userid')

class Expenses extends Component {
    render(){
        let expList = this.props.expenses.filter((expense, index) => {
            return expense.userId === currentUser 
          }).map((expense, index) => {
        return (
            <Expense 
                key={index}
                index={index}
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
