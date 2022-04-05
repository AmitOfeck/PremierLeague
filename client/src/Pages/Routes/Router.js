import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Fixtures from '../Fixtures';
import Teams from '../Teams';
import Utils from '../Utils/Utils';


function Router() {

    const [teams , setTeams] = useState([])

    useEffect(async () => {
        let teams = await Utils.getTeams()
        setTeams(teams)    
    },[])

    return (
        <div>
             <Routes>
                {/* <Route path="/" exact element={<Teams teamsInfo={teams}/>}/> */}
                <Route path="/" exact element={<Fixtures teamsInfo={teams}/>}/>
             </Routes>
        </div>
    );
}

export default Router;