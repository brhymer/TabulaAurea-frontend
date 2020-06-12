import React, { Component } from 'react';
import UserModel from './models/User';

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password2: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.create(this.state)
        .then(data => {
            console.log(data)
            this.setState({
                name: '',
                email: '',
                password: '',
                password2: ''
            })
            this.props.history.push('/login')  ///
        })
    }

    render() {
        return (
            <div className="login">
                <br/>
                <h2 >Register</h2>
                <br/>
                <form onSubmit={this.handleSubmit} >
                    <div className="form register">
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                        />
                    </div>
                    <br/>
                    <div className="form register">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                        />
                    </div>
                    <br/>
                    <div className="form register">
                        <label htmlFor="password">Password</label>
                        <input 
                            onChange={this.handleChange}
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                        />
                    </div>
                    <br/>
                    <div className="form register">
                    <label htmlFor="password2">Confirm Password</label>
                        <input 
                            onChange={this.handleChange}
                            type="password"
                            id="password2"
                            name="password2"
                            value={this.state.password2}
                        />
                    </div> 
                    <br/>
                    <button type="submit">Register</button>
                </form>                       
            </div>
        );
    }
}

export default Register;
