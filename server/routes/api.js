const express = require('express');
const dataBL = require('../models/dataBL');
const router = express.Router();

console.log("in the router")

//Get All Teams
router.route('/Teams').get(async (req, resp) => {
    console.log("in the teams")
    const data = await dataBL.getTeams();
    return resp.json(data);
})

//Get All Teams
router.route('/GetAllFixtures').get(async (req, resp) => {
    const data = await dataBL.getAllFixtures();
    return resp.json(data);
})



module.exports = router;


