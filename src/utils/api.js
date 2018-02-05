import axios from "axios";

export const GithubApiCall = (language) =>  {
    var url = `https://api.github.com/search/repositories?q=language:${language}&stars%3A>1&s=stars`

     return axios.get(url)
     .then(function(response){
         return response.data.items;
     })
};

export const BattleApiCall = (players)=>{

 return axios.all( players.map((user)=>{
       return getUserdata(user)
    })
    )
}

const getProfile = (username) =>  {
    return axios.get('https://api.github.com/users/' + username)
};

const getRepos = (username) =>  {
    return axios.get('https://api.github.com/users/' + username + '/repos'  + '? per_page=100');
};

const getStarCount = (repos) =>  {
    return repos.reduce(function(count,repo){

        return count = count+ repo.stargazers_count
    },0)
};

const calcScore = (profile,repos) =>  {
    
    var followers = profile.followers;
    var totalStars = getStarCount(repos);

    return followers + totalStars
};

const getUserdata = (username) =>  {
  return  axios.all([
        getProfile(username),
        getRepos(username)
    ]).then(function(data){

        const profile = data[0].data;
        const repos = data[1].data

        return{
            profile : profile,
            score: calcScore(profile,repos)
        }
    })
};

