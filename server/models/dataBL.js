// let gameSchema = require('./gameSchema')

const axios = require('axios')

const bigDataURL = 'https://fantasy.premierleague.com/api/bootstrap-static/'
const fixturesURL = 'https://fantasy.premierleague.com/api/fixtures'

const getTeams = async () => {
      let resp = await axios.get(bigDataURL);
      return resp.data.teams
    }

const getAllEvents = async () => {
        let resp = await axios.get(bigDataURL);
        return resp.data.events
      }

const getAllFixtures = async () => {
        let resp = await axios.get(fixturesURL);
        return resp.data
      }

const getFixtureByGameweek = async (gameweek) => {
        let resp = await axios.get(fixturesURL+`?event=`+gameweek);
        return resp.data
      }


module.exports = {getTeams , getAllFixtures , getFixtureByGameweek , getAllEvents};
