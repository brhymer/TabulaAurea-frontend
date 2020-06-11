import React, { Component } from 'react';
import IncomeModel from '../models/Income';
import ExpenseModel from '../models/Expense';
import Incomes from '../components/Incomes';
import Expenses from '../components/Expenses';
import CreateIncomeForm from '../forms/CreateIncomeForm';
import CreateExpenseForm from '../forms/CreateExpenseForm';
import Sum from '../components/Sum';
import ResultContainer from './ResultContainer';

class MonthContainer extends Component {
    state= {
        incomes: [],
        expenses: []
    };

    componentDidMount() {
        this.fetchInc();
        this.fetchExp();
    };

    fetchInc = async () => {
        await IncomeModel.all().then((res) => {
            this.setState ({
                incomes: res.data.incomes,
        });
    })
}

    fetchExp = async () => {
        await ExpenseModel.all().then((res) => {
            this.setState ({
                expenses: res.data.expenses,
                incomes: this.state.incomes
            });
        });
    }


    createIncome = (name, amount) => {
        let newIncome = {
            name: name,
            amount: amount
        };
        IncomeModel.create(newIncome).then((res) => {
            let incomes = this.state.incomes;
            incomes.push(res.data);
            this.fetchInc();
        });
    };

    createExpense = (name, amount) => {    
        let newExpense = {
            name: name, 
            amount: amount
        }
    
        ExpenseModel.create(newExpense).then((res) => {
            let expenses = this.state.expenses;
            expenses.push(res.data);
            this.fetchExp();
        });
    };

    updateIncome = (incomeObj, incomeId) => {
        const isUpdatedIncome = i => {
            return i._id === incomeId;
        };

        IncomeModel.update(incomeId, incomeObj)
        .then((res) => {
            let incomes = this.state.incomes;
            incomes.find(isUpdatedIncome).name = incomeObj.name;
            this.fetchInc();
        });
    };

    updateExpense = (expenseObj, expenseId) => {
        const isUpdatedExpense = e => {   
            return e._id === expenseId;
        };

        ExpenseModel.update(expenseId, expenseObj)
        .then((res) => {
            let expenses = this.state.expenses;
            expenses.find(isUpdatedExpense).name = expenseObj.name;
            this.fetchExp();
        });
    };

    deleteIncome = (income) => {
        IncomeModel.delete(income).then((res) => {
            this.fetchInc();
        });
    };
 
    deleteExpense = (expense) => {
        ExpenseModel.delete(expense).then((res) => {
            this.fetchExp();
        });
    };

    render() {
        return (
            <>
                <h1>Monthly Budget</h1>

                <div className="lr">
                
                    <section className="left"> <h3>Income Sources</h3>
                    <span className="entry">Entry</span>
                    <span className="entry">Cost</span>
                        <Incomes 
                            incomes={this.state.incomes}
                            updateIncome={this.updateIncome}
                            deleteIncome={this.deleteIncome}
                        /> 
                        <CreateIncomeForm 
                            createIncome={this.createIncome}/>
                        <Sum 
                            values = {this.state.incomes} 
                            title = "Income breakdown" 
                        />
                    </section>
                
                    <section className="right"> <h3>Expenses</h3> 
                    <span className="entry">Entry</span>
                    <span className="entry">Cost</span>
                        <Expenses 
                            expenses={this.state.expenses}
                            updateExpense={this.updateExpense}
                            deleteExpense={this.deleteExpense}
                        />
                        <CreateExpenseForm 
                            createExpense={this.createExpense}/>
                        <Sum 
                            values = {this.state.expenses} 
                            title = "Expense breakdown"    
                        />
                    </section>
                </div>
                <section className="res-sec">
                    <ResultContainer
                        incomes= {this.state.incomes}
                        expenses= {this.state.expenses} />
                </section>
            </>
        );
    }
}

export default MonthContainer;
