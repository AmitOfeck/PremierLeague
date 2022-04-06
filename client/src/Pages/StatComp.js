import React from 'react';

function stats(props) {


    function getPlayersNameById(id){
        let info = props.playersInfo.filter((player) => player.id === id)
        info = info[0]
        return info.first_name + " " + info.second_name
    }


    let awayPlayers = props.data.a.length > 0 ?props.data.a.map((player, index) => {
        let name = getPlayersNameById(player.element)
        return (<p key={index}>{name} ({player.value})</p>) 
    }) : <div></div>

    let homePlayers = props.data.h.length > 0 ?props.data.h.map((player, index) => {
        let name = getPlayersNameById(player.element)
        return (<p key={index}>{name} ({player.value})</p>) 
    }) : <div></div>



    return (
        <div>
            <div id="statTitle">{props.data.identifier}</div>
            <div id="homeAway">
            <div>{homePlayers}</div>
            <div>{awayPlayers}</div>
            </div>
        </div>
    );
}

export default stats;