const express = require("express");
const asyncHandler = require("express-async-handler");
const { group, event,userGroup } = require("../../db/models");
const router = express.Router();
const {requireAuth}= require("../../utils/auth")

router.get(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const events = await event.findAll({
      where: {catagoryId:req.params.id},
    });
    const group1 = await group.findByPk(req.params.id);
    const sessionGroups = await userGroup.findAll({
      where:{userId:req.user.id}
    })
    return res.json({ events, group1,sessionGroups });
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
router.post('/', asyncHandler(async function (req, res) {
  const {userId,groupId} = req.body
  const newUserGroup = await userGroup.create({
      userId,
      groupId
  }
    )
    return res.json({newUserGroup});
}))
module.exports = router;
