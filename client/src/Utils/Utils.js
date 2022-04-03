import axios from "axios";

// const localUrl = "http://localhost:8000/games/" 
// const productionUrl = "https://draw-guess-app-server.herokuapp.com/games/"
// const baseUrl = localUrl // if we want back to local , use localUrl

// const fantasyPremierLeagueAPI = "https://fantasy.premierleague.com/api/bootstrap-static/";
// const testAPI = "https://api.tvmaze.com/shows";
// const obj = {
//     method: 'GET',
//     url: 'https://fantasy.premierleague.com/api/bootstrap-static/',
//     // url: 'https://footballapi.pulselive.com/football/',
//     // params: {season: '2020', league: '39'},
//     headers: {
//     "Origin": 'https://www.premierleague.com/'
//     }
// }

    // console.log("func")
    // const res = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/', {
    // headers: {
    // 'Origin': 'https://www.premierleague.com/' ,
    // mode: 'cors',
    // credentials: 'include'
    // }
    // });
    // return res.data

const localUrl = "http://localhost:8000/server/" 


const getTeams = async () => {

    console.log("func")
    let resp = await axios.get(localUrl+"Teams");
    console.log(resp)
    return resp.data

}


export default {getTeams}