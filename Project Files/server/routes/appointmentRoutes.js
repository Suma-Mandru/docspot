// const express = require("express");
// //console.log("✅ appointmentRoutes loaded");

// const router = express.Router();
// const { rescheduleAppointment } = require("../controllers/appointmentController");
// //const authMiddleware = require("../middlewares/authMiddleware");

// // user & doctor both can reschedule
// router.put(
//   "/reschedule/:id",
//   authMiddleware,
//   rescheduleAppointment
// );

// module.exports = router;


const express = require("express");
const router = express.Router();

const { protect } = require("../controllers/authController");
const { rescheduleAppointment } = require("../controllers/appointmentController");

// user & doctor both can reschedule
router.put("/reschedule/:id", protect, rescheduleAppointment);

module.exports = router;
