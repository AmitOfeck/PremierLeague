import React from 'react';

function FixtureResult(props) {

    const homeTeam = getTeamNameById(props.data.team_h);
    const awayTeam = getTeamNameById(props.data.team_a);
    const team_h_score = props.data.team_h_score;
    const team_a_score = props.data.team_a_score;


    function getTeamNameById(id){
        return props.teamsInfo[id-1].name
    }



    return (
        <div>
            <p>{homeTeam}</p>{team_h_score} : {team_a_score}<p>{awayTeam}</p>
        </div>
    );
}

export default FixtureResult;