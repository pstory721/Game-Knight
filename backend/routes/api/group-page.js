const express = require("express");
const asyncHandler = require("express-async-handler");
const { group, event } = require("../../db/models");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const events = await event.findAll({
      include: catagoryId,
    });
    const groups = await group.findByPk(id);

    return res.json({ events, groups });
  })
);
module.exports = router;
