const express = require('express');
const asyncHandler = require('express-async-handler');;
const { User } = require('../../db/models');
const { event,group } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
const events = await event.findAll()
const groups = await group.findAll()
    return res.json({events,groups});
  }));


router.post('/', asyncHandler(async function (req, res) {
  const {type,description,file} = req.body
  console.log(req.body)
  const newGroup = await group.create({
    type,
    description,
    file
  }
    )
    return res.json({newGroup});
}))



module.exports = router