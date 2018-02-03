import React, { Component } from 'react';

class Popular extends Component {
    constructor (props){
        super(props)
        this.state ={
            selectedLanguage:"php"
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(newLanguage){
        this.setState(function(){
            return {
                selectedLanguage : newLanguage
            }
        })
    }
    render() {
        var languages = ["php","java","javascript"]
        return (
            <div className="popular-container">
                <ul className="languages">
                {languages.map(function(item,index){
                    return(
                            <li key={index} onClick={this.updateLanguage.bind(null,item)} >
                                {item}
                            </li>
                    )
                },this)

                }
                </ul>
            </div>
        );
    }
}

export default Popular;