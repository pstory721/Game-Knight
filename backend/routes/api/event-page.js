const express = require("express");
const asyncHandler = require("express-async-handler");
const { event } = require("../../db/models");
const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const events = await event.findByPk(req.params.id);
    return res.json({ events});
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
module.exports = router;