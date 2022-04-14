import React from 'react';

function PlayerNextFixtures(props) {

    function returnTeaById(id){
        let filter = props.teamsInfo.filter((team) => team.id === id)
        let team = filter[0]
        return team.name
     }

     function dateConvert(date){
        let convert = new Date(date)
        return convert.toLocaleDateString()
    }

     let rows = props.next.map((game , index) => {
        return (<tr key={index}>
            <td>{dateConvert(game.kickoff_time)}</td>
            <td>{game.event}</td>
            <td>{game.is_home ? returnTeaById(game.team_h) : returnTeaById(game.team_a)}</td>
            <td id={`difficulty${game.difficulty}`} >{game.difficulty}</td>
        </tr>)
    })

    return (
        <div>
             <table class="table table-hover">
                <thead id="topRow">
                   <tr>
                      <th scope="col">Date</th>
                      <th scope="col">GW</th>
                      <th scope="col">Opponent</th>
                      <th scope="col">FDR</th>
                   </tr>
                </thead>
                <tbody>
                 {rows}

                </tbody>
                </table>
        </div>
    );
}

export default PlayerNextFixtures;