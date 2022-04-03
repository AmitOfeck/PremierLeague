// let gameSchema = require('./gameSchema')

const axios = require('axios')

const bigDataURL = 'https://fantasy.premierleague.com/api/bootstrap-static/'
const fixturesURL = 'https://fantasy.premierleague.com/api/fixtures/'

// const premierleagueAPI = {
//     method: 'GET',
//     url: 'https://fantasy.premierleague.com/api/bootstrap-static/',
//     // url: 'https://footballapi.pulselive.com/football/',
//     // params: {season: '2020', league: '39'},
//     headers: {
//     "Origin": 'https://www.premierleague.com/'
//     }
// }

const getTeams = async () => {
      let resp = await axios.get(bigDataURL);
      return resp.data.teams
    }

const getAllFixtures = async () => {
        let resp = await axios.get( fixturesURL);
        return resp.data
      }


module.exports = {getTeams , getAllFixtures};
