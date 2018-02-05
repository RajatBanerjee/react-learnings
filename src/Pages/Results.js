import React, { Component } from 'react';
import { BattleApiCall } from '../utils/api';
import queryString from 'query-string';
import PlayerPreview from '../Components/PlayerPreview';

class Results extends Component {
    constructor(props, context) {
        super(props, context);
        this.players = queryString.parse(this.props.location.search)
        this.state = {
            loading: true,
            playerInfo: null
        }
    }

    componentDidMount() {
        console.log(this);
        BattleApiCall([this.players.playerOneName, this.players.playerTwoName]).then((data) => {
            this.setState(function () {
                return {
                    loading: false,
                    playerInfo: data
                }
            })
        })
    }

    render() {
        const loading = this.state.loading;
        const playerInfo = this.state.playerInfo;
        return (
            <div>
                {loading === true ?
                    <div>
                        <p>welcome to results</p>
                        <p>Loading.........</p>
                    </div>
                    :
                    <div className="row">
                        <div>
                            <PlayerPreview username={playerInfo[0].profile.login} avatar={playerInfo[0].profile.avatar_url}>
                                <ul className='space-list-items'>
                                    {playerInfo[0].profile.name && <li>{playerInfo[0].profile.name}</li>}
                                    {playerInfo[0].profile.location && <li>{playerInfo[0].profile.location}</li>}
                                    {playerInfo[0].profile.company && <li>{playerInfo[0].profile.company}</li>}
                                    <li>Followers: {playerInfo[0].profile.followers}</li>
                                    <li>Following: {playerInfo[0].profile.following}</li>
                                    <li>Public Repos: {playerInfo[0].profile.public_repos}</li>
                                    {playerInfo[0].profile.blog && <li><a href={playerInfo[0].profile.blog}>{playerInfo[0].profile.blog}</a></li>}
                                </ul>
                            </PlayerPreview>
                        </div>
                        <div>
                            <div>
                                <PlayerPreview username={playerInfo[1].profile.login} avatar={playerInfo[1].profile.avatar_url}>
                                    <ul className='space-list-items'>
                                        {playerInfo[1].profile.name && <li>{playerInfo[1].profile.name}</li>}
                                        {playerInfo[1].profile.location && <li>{playerInfo[1].profile.location}</li>}
                                        {playerInfo[1].profile.company && <li>{playerInfo[1].profile.company}</li>}
                                        <li>Followers: {playerInfo[1].profile.followers}</li>
                                        <li>Following: {playerInfo[1].profile.following}</li>
                                        <li>Public Repos: {playerInfo[1].profile.public_repos}</li>
                                        {playerInfo[1].profile.blog && <li><a href={playerInfo[1].profile.blog}>{playerInfo[1].profile.blog}</a></li>}
                                    </ul>
                                </PlayerPreview>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Results;
