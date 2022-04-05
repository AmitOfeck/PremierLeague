import React, { useEffect, useState } from 'react';
import Utils from './Utils/Utils';


function Teams(props) {

    // const [teams , setTeams] = useState([])

    // useEffect(async () => {
    //     console.log("in use effect")
    //     // let answer = await Utils.getTeams()
    //     // console.log(answer)
    //     setTeams(props.teamsInfo)    
    // },[])

    let body = props.teamsInfo.map((team, index) => {
        return (<tr key={team.id}>
        <th scope="row">{team.id}</th>
        <td>{team.name}</td>
        <td>{team.points}</td>
        <td>{team.played}</td>
        <td>{team.win}</td>
        <td>{team.draw}</td>
        <td>{team.loss}</td>
        </tr>)
    })

    return (
        <div>
            teams

            <table class="table">
              <thead>
                 <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Points</th>
                    <th scope="col">Played</th>
                    <th scope="col">Win</th>
                    <th scope="col">Draw</th>
                    <th scope="col">Loss</th>
                 </tr>
            </thead>
            <tbody>
             {body}
           </tbody>
           </table>

            
        </div>
    );
}

export default Teams;