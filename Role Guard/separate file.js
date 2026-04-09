const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Admin-only route
router.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
  res.json({ msg: "Welcome Admin" });
});

// User route (both admin & user can access if needed)
router.get('/user', authMiddleware, (req, res) => {
  res.json({ msg: "Welcome User", role: req.user.role });
});