const express = require("express");
const asyncHandler = require("express-async-handler");
const { group, event } = require("../../db/models");
const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const events = await event.findAll({
      where: {catagoryId:req.params.id},
    });
    const group1 = await group.findByPk(req.params.id);
    console.log(events,group1, "***************")
    return res.json({ events, group1 });
  })
);
module.exports = router;
