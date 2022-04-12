// let gameSchema = require('./gameSchema')

const axios = require('axios')

const bigDataURL = 'https://fantasy.premierleague.com/api/bootstrap-static/'
const fixturesURL = 'https://fantasy.premierleague.com/api/fixtures'
const elementSummaryURL = 'https://fantasy.premierleague.com/api/element-summary/'

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

const getAllPlayers = async () => {
        let resp = await axios.get(bigDataURL);
        return resp.data.elements
      }

const playerNextFixtures = async (playerId) => {
  console.log("in BL")
  let resp = await axios.get(elementSummaryURL+playerId+'/')
  // console.log(resp)
  return resp.data.fixtures
}

const playerHisory = async (playerId) => {
  let resp = await axios.get(elementSummaryURL+playerId+'/')
  return resp.data.history
}


module.exports = {getTeams , getAllFixtures , getFixtureByGameweek , getAllEvents , getAllPlayers , playerNextFixtures , playerHisory};
