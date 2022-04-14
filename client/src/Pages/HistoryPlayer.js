import React from 'react';

function HistoryPlayer(props) {

    function returnTeaById(id){
        let filter = props.teamsInfo.filter((team) => team.id === id)
        let team = filter[0]
        return team.name
     }

    let rows = props.history.map((game , index) => {
        return (<tr key={index}>
            <td>{game.round}</td>
            <td>{returnTeaById(game.opponent_team)}</td>
            <td>{game.minutes}</td>
            <td>{game.goals_scored}</td>
            <td>{game.assists}</td>
            <td>{game.clean_sheets}</td>
            <td>{game.goals_conceded}</td>
            <td>{game.own_goals}</td>
            <td>{game.penalties_saved}</td>
            <td>{game.penalties_missed}</td>
            <td>{game.yellow_cards}</td>
            <td>{game.red_cards}</td>
            <td>{game.saves}</td>

        </tr>)
    })

    return (
        <div>
            This season
            <table class="table table-hover">
                <thead>
                   <tr>
                      <th scope="col">GW</th>
                      <th scope="col">OPP</th>
                      <th scope="col">MP</th>
                      <th scope="col">GS</th>
                      <th scope="col">A</th>
                      <th scope="col">CS</th>
                      <th scope="col">GC</th>
                      <th scope="col">OG</th>
                      <th scope="col">PS</th>
                      <th scope="col">PM</th>
                      <th scope="col">YC</th>
                      <th scope="col">RC</th>
                      <th scope="col">S</th>
                   </tr>
                </thead>
                <tbody>
                 {rows}
                </tbody>
                </table>
        </div>
    );
}

export default HistoryPlayer;