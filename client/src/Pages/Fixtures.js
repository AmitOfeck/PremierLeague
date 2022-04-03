import React, { useEffect, useState } from 'react';
import Utils from './Utils/Utils';


function Fixtures(props) {

    const [fixtures , setFixtures] = useState([])


    useEffect(async () => {
        let answer = await Utils.getFixturesByGameweek(1)
        console.log(answer)
        setFixtures(answer)
    },[])


    return (
        <div>
            fixtures
        </div>
    );
}

export default Fixtures;