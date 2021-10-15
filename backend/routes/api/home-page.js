const express = require("express");
const asyncHandler = require("express-async-handler");
const { User } = require("../../db/models");
const { event, group, Venue, userGroup } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const router = express.Router();

router.get(
  "/",
  requireAuth,
  asyncHandler(async function (req, res) {
    const events = await event.findAll();
    const groups = await group.findAll();
    const venues = await Venue.findAll();
    const userGroups = await userGroup.findAll({
      where: { userId: req.user.id },
    });
    return res.json({ events, groups, venues, userGroups });
  })
);
module.exports = router;
