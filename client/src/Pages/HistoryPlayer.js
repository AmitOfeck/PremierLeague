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
                <thead id="topRow">
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
                 <tr>
                      <th scope="col">Totals</th>
                      <th scope="col"></th>
                      <th scope="col">{props.data.minutes}</th>
                      <th scope="col">{props.data.goals_scored}</th>
                      <th scope="col">{props.data.assists}</th>
                      <th scope="col">{props.data.clean_sheets}</th>
                      <th scope="col">{props.data.goals_conceded}</th>
                      <th scope="col">{props.data.own_goals}</th>
                      <th scope="col">{props.data.penalties_saved}</th>
                      <th scope="col">{props.data.penalties_missed}</th>
                      <th scope="col">{props.data.yellow_cards}</th>
                      <th scope="col">{props.data.red_cards}</th>
                      <th scope="col">{props.data.saves}</th>
                   </tr>
                </tbody>
                </table>
        </div>
    );
}

export default HistoryPlayer;