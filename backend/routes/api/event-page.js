const express = require("express");
const asyncHandler = require("express-async-handler");
const { event,rsvp } = require("../../db/models");
const router = express.Router();
const {requireAuth}= require("../../utils/auth")

router.get(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const events = await event.findByPk(req.params.id);
    const rsvps = await rsvp.findAll({
      where:{userId:req.user.id}
    })
    return res.json({ events,rsvps});
  })
);

router.delete("/:id", asyncHandler(async function (req, res) {
  const DeleteEvent = await event.findByPk(req.params.id)
  await DeleteEvent.destroy()
  return res.json();
}));
router.put("/:id", asyncHandler(async function (req, res) {
  const UpdatedEvent = await event.findByPk(req.params.id)
  const id = req.body.id
  delete req.body.id
  await UpdatedEvent.update(
    req.body,
    {where:{id},
    returning: true,
    plain: true
  }
  )
  return res.json({UpdatedEvent});
}));
router.post('/', asyncHandler(async function (req, res) {
  const {eventId,userId} = req.body
  const newrsvp = await rsvp.create({
    eventId,
    userId
  }
    )
    return res.json({newrsvp});
}))
module.exports = router;
