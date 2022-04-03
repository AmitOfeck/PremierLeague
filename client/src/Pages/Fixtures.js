import React, { useEffect, useState } from 'react';
import Utils from './Utils/Utils';


function Fixtures(props) {

    const [fixtures , setFixtures] = useState([])
    const [gameweek , setGameweek] = useState(1)

    useEffect(async () => {
        let answer = await Utils.getAlEvents()
        console.log(answer)
        // let filter = answer.data.filter((fixture) => fixture.is_current === true)
        // console.log(filter)
        // setGameweek(answer)
    },[])


    useEffect(async () => {
        let answer = await Utils.getFixturesByGameweek(gameweek)
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