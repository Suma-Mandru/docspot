// const Appointment = require("../models/appointmentModel");
// const catchAsync = require("../utils/catchAsync");


// RESCHEDULE APPOINTMENT (user or doctor)
// exports.rescheduleAppointment = async (req, res) => {
//   try {
//     const { date, time } = req.body;
//     const appointmentId = req.params.id;

//     if (!date || !time) {
//       return res.status(400).json({
//         success: false,
//         message: "Date and time are required",
//       });
//     }

//     const appointment = await Appointment.findById(appointmentId);

//     if (!appointment) {
//       return res.status(404).json({
//         success: false,
//         message: "Appointment not found",
//       });
//     }

//     appointment.date = date;
//     appointment.time = time;
//     appointment.status = "rescheduled";
//     appointment.rescheduled = true;
//     appointment.rescheduledAt = new Date();

//     await appointment.save();

//     res.status(200).json({
//       success: true,
//       message: "Appointment rescheduled successfully",
//       appointment,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// exports.rescheduleAppointment = catchAsync(async (req, res, next) => {
//   const { date, time } = req.body; // date = "2026-02-09", time = "14:30"

//   // Combine date and time into a single Date object
//   const [hours, minutes] = time.split(":").map(Number);
//   const rescheduledDate = new Date(date);
//   rescheduledDate.setHours(hours, minutes, 0, 0);

//   const appointment = await Appointment.findByIdAndUpdate(
//     req.params.id,
//     {
//       date: rescheduledDate.toISOString(), // store as ISO string
//       status: "rescheduled",
//     },
//     { new: true }
//   );

//   res.status(200).json({
//     status: "success",
//     message: "Appointment rescheduled successfully",
//     data: appointment,
//   });
// });

// exports.rescheduleAppointment = catchAsync(async (req, res, next) => {
//   const { appointmentId, newDate } = req.body;

//   const appointment = await Appointment.findById(appointmentId);

//   if (!appointment) {
//     return res.status(404).json({ success: false, message: "Appointment not found" });
//   }

//   appointment.date = newDate;
//   await appointment.save();

//   res.status(200).json({
//     success: true,
//     message: "Appointment rescheduled successfully",
//     appointment,
//   });
// });

const catchAsync = require("../utils/catchAsync");
const Appointment = require("../models/appointmentModel");
const moment = require("moment");

// Reschedule appointment
exports.rescheduleAppointment = catchAsync(async (req, res, next) => {
  const { appointmentId, newDate } = req.body;

  // Only doctors allowed
  if (req.user.role !== "doctor") {
    return res.status(403).json({
      success: false,
      message: "Only doctors can reschedule appointments",
    });
  }

  const appointment = await Appointment.findById(appointmentId);
  if (!appointment) {
    return res.status(404).json({ success: false, message: "Appointment not found" });
  }

  // Check 12 hours before appointment
  const now = moment();
  const appointmentTime = moment(appointment.date);
  if (appointmentTime.diff(now, "hours") < 12) {
    return res.status(400).json({
      success: false,
      message: "Cannot reschedule less than 12 hours before appointment",
    });
  }

  // Update appointment date and notify user
  appointment.date = newDate;
  appointment.rescheduleMessage = `Your appointment has been rescheduled to ${moment(newDate).format("DD-MM-YYYY HH:mm")}`;
  await appointment.save();

  res.status(200).json({
    success: true,
    message: "Appointment rescheduled successfully",
    appointment,
  });
});

