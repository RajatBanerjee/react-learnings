import React, { Component } from 'react';
import LanguageSelector from '../Components/LanguageSelector';
import { GithubApiCall } from '../utils/api.js';
import Repos from '../Components/Repos';
class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: "php",
            repos: null
        };
        this.languages = ["php", "java", "javascript"];
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    CallGithub(newLanguage) {
        GithubApiCall(newLanguage)
            .then((res) => {
                this.setState(function () {
                    return {
                        repos: res
                    }
                })
            })
    }
    componentDidMount() {
        this.CallGithub(this.state.selectedLanguage)
    }

    updateLanguage(newLanguage) {
        this.setState(function () {
            return {
                selectedLanguage: newLanguage,
                repos: null
            }
        });

        this.CallGithub(newLanguage);
    }
    render() {

        return (
            <div className="popular-container">
                <LanguageSelector languages={this.languages} updateLanguage={this.updateLanguage} selectedLanguage={this.state.selectedLanguage} />
                <Repos repos={this.state.repos} />
            </div>
        );
    }
}

export default Popular;