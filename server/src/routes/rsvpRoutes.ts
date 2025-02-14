// import { Router } from "express";
// import { Rsvp } from "../models/rsvp.js";
// const router = Router();

// // Get all RSVPs for a user
// router.get("/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const rsvps = await RsvpModel.findAll({ where: { user_id: userId } });
//     res.json(rsvps);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch RSVPs" });
//   }
// });

// // Remove an RSVP
// router.delete("/:rsvpId", async (req, res) => {
//   try {
//     const { rsvpId } = req.params;
//     const deleted = await RsvpModel.destroy({ where: { rsvp_id: rsvpId } });
//     if (!deleted) return res.status(404).json({ error: "RSVP not found" });
//     res.json({ message: "RSVP removed successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to remove RSVP" });
//   }
// });

// export default router;
