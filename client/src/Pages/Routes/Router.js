import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Teams from '../Teams';
import Utils from '../Utils/Utils';


function Router() {

    const [teams , setTeams] = useState([])

    useEffect(async () => {
        let teams = await Utils.getTeams()
        console.log(teams)
        setTeams(teams)    
    },[])

    return (
        <div>
             <Routes>
                <Route path="/" exact element={<Teams teamsInfo={teams}/>}/>
             </Routes>
        </div>
    );
}

export default Router;