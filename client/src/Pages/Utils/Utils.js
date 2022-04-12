import axios from "axios";

const localUrl = "http://localhost:8000/server/" 

const getTeams = async () => {
    let resp = await axios.get(localUrl+"Teams");
    return resp.data
}

const getAllFixtures = async () => {
    let resp = await axios.get(localUrl+"GetAllFixtures");
    return resp.data
}

const getFixturesByGameweek = async (gameweek) => {

    let resp = await axios.get(localUrl+"getFixtureByGameweek"+'/'+gameweek);
    return resp.data
}

const getAlEvents = async () => {

    let resp = await axios.get(localUrl+"getAllEvents");
    return resp.data
}

const getAllPlayers= async () => {
      
    let resp = await axios.get(localUrl+"getAllPlayers");
    return resp.data
}

const getPlayerNextFixtures= async (playerId) => {

    let resp = await axios.get(localUrl+"getPlayerNextFixtures/"+playerId);
    return resp.data
}

const getPlayerHistory= async (playerId) => {
    
    let resp = await axios.get(localUrl+"getPlayerHistory/"+playerId);
    return resp.data
}


export default {getTeams , getAllFixtures, getFixturesByGameweek , getAlEvents , getAllPlayers , getPlayerNextFixtures , getPlayerHistory}