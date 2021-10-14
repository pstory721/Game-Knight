const express = require('express');
const asyncHandler = require('express-async-handler');;
const { User } = require('../../db/models');
const { event,group,Venue } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async function (_req, res) {
    const events = await event.findAll()
    const groups = await group.findAll()
    const venues = await Venue.findAll()
        return res.json({events,groups,venues});
      }));


    router.post('/', asyncHandler(async function (req, res) {
      const {hostId,venueId,catagoryId,name,date,capacity} = req.body
      const newEvent = await event.create({
        hostId,
        venueId,
        catagoryId,
        name,
        date,
        capacity
      }
        )
        return res.json({newEvent});
    }))
    module.exports = router
