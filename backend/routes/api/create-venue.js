const express = require('express');
const asyncHandler = require('express-async-handler');;
const { User } = require('../../db/models');
const { Venue } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
const venues = await Venue.findAll()
    return res.json({venues});
  }));


router.post('/', asyncHandler(async function (req, res) {
  const {name,address,city,state,zipCode,lat,lng} = req.body
  const newVenue = await Venue.create({
    name,
    address,
    city,
    state,
    zipCode,
    lat,
    lng
  }
    )
    return res.json({newVenue});
}))



module.exports = router
