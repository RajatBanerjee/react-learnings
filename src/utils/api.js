import axios from "axios";

export const GithubApiCall = (language) =>  {
    var url = `https://api.github.com/search/repositories?q=language:${language}&stars%3A>1&s=stars`

     return axios.get(url)
     .then(function(response){
         return response.data.items;
     })
};
