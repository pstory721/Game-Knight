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
  console.log(req.params.id)
  await DeleteGroup.destroy()
  return res.json();
}));
router.put("/:id", asyncHandler(async function (req, res) {
  const UpdatedGroup = await group.findByPk(req.params.id)
  console.log(req.params.id)
  await UpdatedGroup.update(res.body)
  return res.json();
}));
module.exports = router;
