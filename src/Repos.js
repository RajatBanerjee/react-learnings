import React from 'react';
import RepoItem from './RepoItem';

const Repos = (props) => {
    if(props.repos !=null){
        return (
            <div>
                <ul className="popular-list">
                {    props.repos.map(function(repo,index){
                        return(
                            
                               <RepoItem repo={repo} key={index}/>
                            
                        )
                    })
                }
                </ul>
            </div>
        );
    }else{
        return <div/>
    }
};

export default Repos;