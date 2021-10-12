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
  await group.destroy({where:{id:DeleteGroup.id}})
  return res.json({ DeleteGroup });
}));
module.exports = router;
