import axios from "axios";

const localUrl = "http://localhost:8000/server/" 

const getTeams = async () => {
    let resp = await axios.get(localUrl+"Teams");
    console.log(resp)
    return resp.data
}


export default {getTeams}