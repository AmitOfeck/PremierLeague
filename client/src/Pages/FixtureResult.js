import React from 'react';

function FixtureResult(props) {

    const homeTeam = getTeamNameById(props.data.team_h)
    const awayTeam = getTeamNameById(props.data.team_a)

    function getTeamNameById(id){
        return props.teamsInfo[id-1].name
    }



    return (
        <div>
            {homeTeam} : {awayTeam}
        </div>
    );
}

export default FixtureResult;