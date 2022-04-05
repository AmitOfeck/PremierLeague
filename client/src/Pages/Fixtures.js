import React, { useEffect, useState } from 'react';
import FixtureResult from './FixtureResult';
import Utils from './Utils/Utils';


function Fixtures(props) {

    let [fixtures , setFixtures] = useState([])
    let [gameweek , setGameweek] = useState({deadline_time : ""})

    useEffect(async () => {
        console.log("first")
        let answer = await Utils.getAlEvents()
        let filter = answer.filter((fixture) => fixture.is_current === true)

        console.log("gameweek: " + filter[0].id)

        let fixturesByGameweek = await Utils.getFixturesByGameweek(filter[0].id)
        console.log(fixturesByGameweek)
        setFixtures(fixturesByGameweek)
        setGameweek(filter[0])

    },[])


    function dateConvert(date){
        let convert = new Date(date)
        return convert.toLocaleDateString()
    }

    // useEffect(async () => {
    //     console.log("second use effect")
    //     let answer = await Utils.getFixturesByGameweek(gameweek.id)
    //     console.log(answer)
    //     setFixtures(answer)
    // },[gameweek])

    let fixturesDisplay =  fixtures.map((fixture, index) => {
        return (<FixtureResult key={fixture.code} data={fixture} />)
    })

    return (
        <div>
            <h5>{gameweek.name} {dateConvert(gameweek.deadline_time)}</h5>
            {fixturesDisplay}

        </div>
    );
}

export default Fixtures;