const express = require('express');
const asyncHandler = require('express-async-handler');;
const { User } = require('../../db/models');
const { venue } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
const venues = await venue.findAll()
    return res.json({venue});
  }));


router.post('/', asyncHandler(async function (req, res) {
  const {name,address,city,state,zipCode,lat,lng} = req.body
  const newVenue = await venue.create({
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
