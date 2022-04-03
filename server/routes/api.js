const express = require('express');
const dataBL = require('../models/dataBL');
const router = express.Router();

console.log("in the router")

//Get all Teams
router.route('/Teams').get(async (req, resp) => {
    console.log("in the teams")
    const data = await dataBL.getTeams();
    return resp.json(data);
})

//Get all fixtures
router.route('/GetAllFixtures').get(async (req, resp) => {
    const data = await dataBL.getAllFixtures();
    return resp.json(data);
})

//Get specific ficture
router.route('/getFixtureByGameweek/:gameweek').get(async (req, resp) => {
    const gameweek = req.params.gameweek;
    const data = await dataBL.getFixtureByGameweek(gameweek);
    return resp.json(data);
})



module.exports = router;


