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

    componentDidUpdate(prevProps, prevState) {
        if (this.state.expenses !== prevState.expenses) {
            this.fetchData();
          }
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

    createIncome = (name, amount) => {
        let newIncome = {
            name: name,
            amount: amount
        };
        IncomeModel.create(newIncome).then((res) => {
            let incomes = this.state.incomes;
            let newIncomes = incomes.push(res.data);
            this.setState({ newIncomes })
        });
    };

    createExpense = (name, amount) => {    
        let newExpense = {
            name: name, 
            amount: amount
        }
    
        ExpenseModel.create(newExpense).then((res) => {
            let expenses = this.state.expenses;
            let newExpenses = expenses.push(res.data);
            this.setState({ newExpenses })
        });
    };

    updateIncome = (incomeName, incomeId) => {
        const isUpdatedIncome = i => {
            return i._id === incomeId;
        };

        IncomeModel.update(incomeId, incomeName)
        .then((res) => {
            let incomes = this.state.incomes;
            incomes.find(isUpdatedIncome).name = incomeName.name;
            this.setState({ incomes: incomes });
        });
    };

    updateExpense = (expenseName, expenseId) => {
        const isUpdatedExpense = e => {   
            return e._id === expenseId;
        };

        ExpenseModel.update(expenseId, expenseName)
        .then((res) => {
            let expenses = this.state.expenses;
            expenses.find(isUpdatedExpense).name = expenseName.name;
            this.setState({ expenses: expenses });
        });
    };

    deleteIncome = (income) => {
        IncomeModel.delete(income).then((res) => {
            return income._id !== res.data._id;
        });
        this.setState({ incomes: this.state.expenses });
    };
 
    deleteExpense = (expense) => {
        ExpenseModel.delete(expense).then((res) => {
            // let expenses = this.state.expenses.filter(function(expense) {

                return expense._id !== res.data._id;
            // });
        })
        this.setState({ expenses: this.state.expenses });  // undefined
    };

    render() {
        return (
            <>
                <h1>Monthly Budget</h1>
                <div className="lr">
                
                    <section className="left"> Income Sources
                        <p className="entry">Entry &nbsp;&nbsp;&nbsp;&nbsp;Cost</p>
                        <Incomes 
                            incomes={this.state.incomes}
                            updateIncome={this.updateIncome}
                            deleteIncome={this.deleteIncome}
                        /> 
                        <CreateIncomeForm 
                            createIncome={this.createIncome}/>
                    </section>
                
                    <section className="right"> Expenses 
                        <p className="entry">Entry &nbsp;&nbsp;&nbsp;&nbsp;Cost</p>

                        <Expenses 
                            expenses={this.state.expenses}
                            updateExpense={this.updateExpense}
                            deleteExpense={this.deleteExpense}
                        />
                        <CreateExpenseForm 
                            createExpense={this.createExpense}/>
                    </section>
                </div>
            </>
        );
    }
}

export default MonthContainer;
