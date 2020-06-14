import React, {Component} from 'react';
import Income from './Income';

const currentUser = localStorage.getItem('userid')

class Incomes extends Component {

    render(){
    // let incList = this.props.incomes.map((income, index) => {
    let incList = this.props.incomes.filter((income, index) => {
            return income.userId === currentUser 
          }).map((income, index) => {
 
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
