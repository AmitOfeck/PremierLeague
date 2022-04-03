import React, { useEffect, useState } from 'react';
import Utils from '../Utils/Utils';


function Teams(props) {

    const [teams , setTeams] = useState([])

    useEffect(async () => {
        let answer = await Utils.getTeams()
        console.log(answer)
        setTeams(answer)    
    },[])

    return (
        <div>
            teams
        </div>
    );
}

export default Teams;