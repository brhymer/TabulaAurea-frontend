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

    componentDidUpdate(prevProps, prevState) {
        if (this.state.expenses !== prevState.expenses) {
            this.fetchExp(); 
          }
        if (this.state.incomes !== prevState.incomes) {
            this.fetchInc(); 
          }
    };

    fetchInc = () => {
        IncomeModel.all().then((res) => {
            this.setState ({
                incomes: res.data.incomes,
            });
        });
    }

    fetchExp = () => {
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
            // let newIncomes = 
            incomes.push(res.data);
            // this.setState({ newIncomes })
        });
    };

    createExpense = (name, amount) => {    
        let newExpense = {
            name: name, 
            amount: amount
        }
    
        ExpenseModel.create(newExpense).then((res) => {
            let expenses = this.state.expenses;
            // let newExpenses = 
            expenses.push(res.data);
            // this.setState({ newExpenses })
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
            this.setState({ incomes: incomes });
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
        this.setState({ expenses: this.state.expenses });
    };

    render() {
        return (
            <>
                <h1>Monthly Budget</h1>

                <div className="lr">
                
                    <section className="left"> <h3>Income Sources</h3>
                        <p className="entry">Entry &nbsp;&nbsp;&nbsp;&nbsp;Cost</p>
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
                        <p className="entry">Entry &nbsp;&nbsp;&nbsp;&nbsp;Cost</p>

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
                <section className="result">
                    <ResultContainer
                        incomes= {this.state.incomes}
                        expenses= {this.state.expenses} />
                </section>
            </>
        );
    }
}

export default MonthContainer;
