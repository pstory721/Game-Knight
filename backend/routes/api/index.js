const router = require('express').Router();
const { restoreUser } = require('../../utils/auth.js');
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const homeRouter = require('./home-page')
const createGroupRouter = require('./Organize')
const groupPageRouter = require('./group-page')
const venueCreateRouter = require('./create-venue')
router.use('/session', sessionRouter);
router.use('/home',homeRouter)
router.use('/users', usersRouter);
router.use('/create-group',createGroupRouter)
router.use('/group-page',groupPageRouter)
router.use('/create-venue',venueCreateRouter)
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});



router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));



router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);


module.exports = router;
