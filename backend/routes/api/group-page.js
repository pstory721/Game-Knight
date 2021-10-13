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
    return res.json({ events, group1 });
  })
);

router.delete("/:id", asyncHandler(async function (req, res) {
  const DeleteGroup = await group.findByPk(req.params.id)
  await DeleteGroup.destroy()
  return res.json();
}));
router.put("/:id", asyncHandler(async function (req, res) {
  const UpdatedGroup = await group.findByPk(req.params.id)
  const id = req.body.id
  delete req.body.id
  await UpdatedGroup.update(
    req.body,
    {where:{id},
    returning: true,
    plain: true
  }
  )
  return res.json({UpdatedGroup});
}));
module.exports = router;
