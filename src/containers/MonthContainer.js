import React, { Component } from 'react';
import IncomeModel from '../models/Income';
import ExpenseModel from '../models/Expense';
import Incomes from '../components/Incomes';
import Expenses from '../components/Expenses';
import CreateIncomeForm from '../forms/CreateIncomeForm';
import CreateExpenseForm from '../forms/CreateExpenseForm';

class MonthContainer extends Component {
    state= {
        incomes: [],
        expenses: []
    };

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        IncomeModel.all().then((res) => {
            this.setState ({
                incomes: res.data.incomes,
            });
        });
        ExpenseModel.all().then((res) => {
            this.setState ({
                expenses: res.data.expenses,
            });
        });
    }

    // createIncome = (income) => {
    //     let newIncome = {
    //         body: income,
    //         amount: amount
    //     };
    //     IncomeModel.create(newIncome).then((res) => {
    //         let incomes = this.state.incomes;
    //         incomes.push(res.data);
    //         this.setState({ incomes: incomes })
    //     });
    // };

    // createExpense = (expense) => {
    //     let newExpense = {
    //         body: expense,
    //         amount: amount
    //     };
    //     ExpenseModel.create(newExpense).then((res) => {
    //         let expenses = this.state.expenses;
    //         expenses.push(res.data);
    //         this.setState({ expenses: expenses })
    //     });
    // };

    updateIncome = income => {
        const isUpdatedIncome = i => {
            return i._id === income._id;
        };

        IncomeModel.update(income)
        .then((res) => {
            let incomes = this.state.incomes;
            incomes.find(isUpdatedIncome).body = income.body;
            this.setState({ incomes: incomes });
        });
    };

    updateExpense = expense => {
        const isUpdatedExpense = e => {
            return e._id === expense._id;
        };

        ExpenseModel.update(expense)
        .then((res) => {
            let expenses = this.state.expenses;
            expenses.find(isUpdatedExpense).body = expense.body;
            this.setState({ expenses: expenses });
        });
    };

    // deleteIncome = (income) => {
    //     IncomeModel.delete(income).then((res) => {
    //         return income._id !== res.data._id;
    //     });
    //     this.setState({ incomes });
    // };
 
    // deleteExpense = (expense) => {
    //     ExpenseModel.delete(expense).then((res) => {
    //         return expense._id !== res.data._id;
    //     });
    //     this.setState({ expenses });
    // };

    render() {
        return (
            <div>
                <h1>Monthly Budget</h1>
                <CreateIncomeForm 
                    createIncome={this.createIncome}/>
                <CreateExpenseForm 
                    createExpense={this.createExpense}/>
                <Incomes 
                    incomes={this.state.incomes}
                    updateIncome={this.updateIncome}
                    deleteIncome={this.deleteIncome}
                />
                <Expenses 
                    expenses={this.state.expenses}
                    updateExpense={this.updateExpense}
                    deleteExpense={this.deleteExpense}
                />
            </div>
        );
    }
}

export default MonthContainer;
