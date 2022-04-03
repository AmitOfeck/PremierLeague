import React, { useEffect, useState } from 'react';
import Utils from './Utils/Utils';


function Fixtures(props) {

    useEffect(async () => {
        let answer = await Utils.getAllFixtures()
        console.log(answer) 
    },[])


    return (
        <div>
            fixtures
        </div>
    );
}

export default Fixtures;