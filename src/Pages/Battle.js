import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerInput from '../Components/PlayerInput'
import PlayerPreview from '../Components/PlayerPreview';
import {Link  } from "react-router-dom";
class componentName extends Component {
    constructor(props) {
        super(props);
        this.state={
           playerOneName:'' ,
           playerOneImage:'',
           playerTwoName:'' ,
           playerTwoImage:'',
        }
    }
    handleSubmit = (id,username)=>{
        this.setState(function(){
            let newState= {};
            newState[id+'Name']=username
            newState[id+'Image']='https://github.com/' + username + '.png?size=200';
            return newState
        })
    }
    handleReset=(id) =>{
        this.setState(function () {
          var newState = {};
          newState[id + 'Name'] = '';
          newState[id + 'Image'] = null;
          return newState;
        })
      }
    render() {
        const match= this.props.match;
        const playerOneName = this.state.playerOneName;
        const playerTwoName = this.state.playerTwoName
        const playerOneImage = this.state.playerOneImage;
        const playerTwoImage = this.state.playerTwoImage
        return (
            <div>
                <div className="row">
                {!playerOneName ?
                    <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit}/>
                    :
                    <PlayerPreview id='playerOne' username={playerOneName} avatar={playerOneImage} onReset={this.handleReset}/>
                }
                {!playerTwoName ?
                    <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit}/>
                    :
                    <PlayerPreview id='playerTwo' username={playerTwoName} avatar={playerTwoImage} onReset={this.handleReset}/>
                }
            </div>
                {playerOneName && playerTwoName &&
                    <Link className='button' to={{
                        pathname:match.url+'/results',
                        search:`playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                    }}>Battle</Link>
                }
                
            </div>
        );
    }
}

componentName.propTypes = {

};

export default componentName;