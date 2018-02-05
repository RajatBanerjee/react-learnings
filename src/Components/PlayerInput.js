import React, { Component } from 'react';

class PlayerInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        }
    }

    handleChange = (event) => {
        var value = event.target.value;
        this.setState(function(){
            return{
                username:value
            }
        })
    }

    handleSumbit =(event)=>{
        event.preventDefault();

        this.props.onSubmit(
            this.props.id,
            this.state.username
          );
    }
    render() {
       return(
        <form className='column' onSubmit={this.handleSumbit}>
            <label className="header">
                {this.props.label}
            </label>
            <input id='username' type='text' value={this.state.username} onChange={this.handleChange} />
            <button className='button' type='submit'>submit</button>
        </form>
       )
    }
}

export default PlayerInput;