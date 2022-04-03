// let gameSchema = require('./gameSchema')

const axios = require('axios')

const premierleagueAPI = {
    method: 'GET',
    url: 'https://fantasy.premierleague.com/api/bootstrap-static/',
    // url: 'https://footballapi.pulselive.com/football/',
    // params: {season: '2020', league: '39'},
    headers: {
    "Origin": 'https://www.premierleague.com/'
    }
}

const getTeams = async () => {
      console.log("get teams")
      let resp = await axios.request(premierleagueAPI);
      return resp.data.teams
    }


module.exports = {getTeams};
