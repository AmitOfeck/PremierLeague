import React, { useEffect, useState } from 'react';
import FixtureResult from './FixtureResult';
import Utils from './Utils/Utils';
import '../App.css';


function Fixtures(props) {

    let [fixtures , setFixtures] = useState([])
    let [gameweek , setGameweek] = useState({deadline_time : "" , id:-1})
    let [allPlayers , setAllPlayers] = useState([])

    useEffect(async () => {
        console.log("first")
        let answer = await Utils.getAlEvents()
        let filter = answer.filter((fixture) => fixture.is_current === true)

        console.log("gameweek: " + filter[0].id)

        let fixturesByGameweek = await Utils.getFixturesByGameweek(filter[0].id)
        console.log(fixturesByGameweek)

        let playersList = await Utils.getAllPlayers()
        setAllPlayers(playersList)
        setFixtures(fixturesByGameweek)
        setGameweek(filter[0])

    },[])


    function dateConvert(date){
        let convert = new Date(date)
        return convert.toLocaleDateString()
    }

    // useEffect( async () => {
    //     console.log("second use effect")
    //     // if(gameweek.id >=0 ){
    //         // let answer = await Utils.getFixturesByGameweek(gameweek.id)
    //         // console.log(answer)
    //         // setFixtures(answer)
    //     // }
    // },[gameweek])

    let fixturesDisplay =  fixtures.map((fixture, index) => {
        return (<FixtureResult key={fixture.code} data={fixture} teamsInfo={props.teamsInfo} playersInfo={allPlayers}/>)
    })

    async function previosGameweek(currentGameweek){
        let previos = currentGameweek-1
        let answer = await Utils.getFixturesByGameweek(previos)
        console.log(answer)
        setFixtures(answer)
        // setGameweek(previos)
    }

    return (
        <div>

            <br/>
            
            <div id="gameweekSelectionDiv">
            <div></div>
            <button type="button" class="btn btn-outline-success" onClick={() => previosGameweek(gameweek.id) }>Previos</button>
            <h5>{gameweek.name} &nbsp;&nbsp; - &nbsp;&nbsp; {dateConvert(gameweek.deadline_time)}</h5>
            <button type="button" class="btn btn-outline-success">Next</button>
            <div></div>
            </div>

            <br/>

            {fixturesDisplay}

        </div>
    );
}

export default Fixtures;