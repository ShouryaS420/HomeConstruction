const express = require("express");
const router = express.Router();
const Consultation = require("../models/Consultation");
const { body, validationResult } = require("express-validator");

router.post("/addConsultation", async (req, res) => {
  try {
    const { fName, lName, mobile, email, city, lookingFor } = req.body;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const consultation = new Consultation({
      fName,
      lName,
      mobile,
      email,
      city,
      lookingFor,
    });

    const saveConsultation = await consultation.save();

    res.json(saveConsultation);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
