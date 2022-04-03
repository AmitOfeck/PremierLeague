import axios from "axios";

const localUrl = "http://localhost:8000/server/" 

const getTeams = async () => {
    let resp = await axios.get(localUrl+"Teams");
    console.log(resp)
    return resp.data
}

const getAllFixtures = async () => {
    let resp = await axios.get(localUrl+"GetAllFixtures");
    console.log(resp)
    return resp.data
}

const getFixturesByGameweek = async (gameweek) => {
    
    let resp = await axios.get(localUrl+"getFixtureByGameweek"+'/'+gameweek);
    return resp.data
}


export default {getTeams , getAllFixtures, getFixturesByGameweek}