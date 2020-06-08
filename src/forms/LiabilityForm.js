import React, { Component } from 'react';

class LiabilityForm extends Component {
    state = {
        name: '',
        value: '',
        intRate: ''
    }

    onChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
 
    onChange2 = (event) => {
        this.setState({
            value: event.target.value,
        });
    };
 
    onChange3 = (event) => {
        this.setState({
            intRate: event.target.value,
        });
    };
 
    onSubmit = (event) => {
        event.preventDefault();
        this.props.toggleBodyForm()
        const liability = this.state;
        this.props.updateLiability(liability, this.props.liability._id)
    };

    componentDidMount(){
        this.setState({
            name: this.props.liability.name,
            value: this.props.liablity.value,
            intRate: this.props.liability.intRate
        })
    };


    render() {
        return (
            <div style={this.props.style} className="liabform">
                <form onSubmit={ this.onSubmit }>
                    <input
                        autoFocus={ this.props.autoFocus }
                        onChange={ this.onChange }
                        placeholder={ this.props.name }
                        type="text"
                        value={(this.state.name) || ''}/>
                    <input
                        autoFocus={ this.props.autoFocus }
                        onChange={ this.onChange2 }
                        placeholder={ this.props.value }
                        type="number"
                        value={(this.state.value) || ''}/>
                    <input
                        autoFocus={ this.props.autoFocus }
                        onChange={ this.onChange3 }
                        placeholder={ this.props.intRate }
                        type="number"
                        value={(this.state.intRate) || ''}/>
                    <button type="submit" className="btn">{this.props.buttonName}</button>
                </form>
            </div>
        );
    }
}

export default LiabilityForm;
