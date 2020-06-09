import React, { Component } from 'react';

class WishForm extends Component {
    state = {
        name: '',
        reason: ''
    }

    onChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    onChange2 = (event) => {
        this.setState({
            reason: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.toggleBodyForm()
        const wish = this.state;
        this.props.updateWish(wish, this.props.wish._id);
    };

    componentDidMount(){
        this.setState({
            name: this.props.wish.name, reason: this.props.wish.reason
        })
    }

    render() {
        return (
            <div style={this.props.style} className="wishform">
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
                        placeholder={ this.props.reason }
                        type="textfield"
                        value={(this.state.reason) || ''}/>
                    <button type="submit" className="btn">{this.props.buttonName}</button>
                </form>
            </div>
        );
    }
}

export default WishForm;
