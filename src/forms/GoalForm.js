import React, { Component } from 'react';

class GoalForm extends Component {
    state = {
        name: '',
        date: ''
    }

    onChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    onChange2 = (event) => {
        this.setState({
            date: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.toggleBodyForm()
        const goal = this.state;
        this.props.updateGoal(goal, this.props.goal._id);
    };

    componentDidMount(){
        this.setState({
            name: this.props.goal.name, date: this.props.goal.date
        })
    }

    render() {
        return (
            <div style={this.props.style} className="goalform">
                <form onSubmit={ this.onSubmit } >
                    <input 
                        autoFocus={ this.props.autoFocus }
                        onChange={ this.onChange }
                        placeholder={ this.props.name }
                        type="text"
                        value={(this.state.name) || ''}/>
                    <input 
                        autoFocus={ this.props.autoFocus }
                        onChange={ this.onChange2 }
                        placeholder={ this.props.date }
                        type="date"
                        value={(this.state.date) || ''}/>
                    <button type="submit" className="btn">{this.props.buttonName}</button>
                </form>
            </div>
        );
    }
}

export default GoalForm;
