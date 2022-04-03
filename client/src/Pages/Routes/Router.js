import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Teams from '../Teams';

function Router() {
    return (
        <div>
             <Routes>
                <Route path="/" exact element={<Teams/>}/>
             </Routes>
        </div>
    );
}

export default Router;