import React, { useEffect, useState } from 'react';
import '../App.css';

function FixtureResult(props) {

    let [showStats , setShowStats] = useState(false)


    const homeTeam = getTeamNameById(props.data.team_h);
    const awayTeam = getTeamNameById(props.data.team_a);
    const team_h_score = props.data.started? props.data.team_h_score : "";
    const team_a_score = props.data.started? props.data.team_a_score : "";
    const time = !props.data.started ? timeConvert(props.data.kickoff_time) : "";

    function getTeamNameById(id){
        return props.teamsInfo[id-1].name
    }

    function timeConvert(date){
        let convert = new Date(date)
        return convert.toTimeString().slice(0,5)
    }

    let visibility = showStats ? "" : "hiddenDiv";
    


    return (
        <div>
            <div id="gameResult" onClick={() => setShowStats(!showStats)}>
            <p id="teamName">{homeTeam} &nbsp; {team_h_score} - {team_a_score}  &nbsp; {awayTeam}</p>
            {time}
            </div>

            <div class="gameStats" id={visibility}>
            hi
            </div>

            <br/><br/>
        </div>
    );
}

export default FixtureResult;