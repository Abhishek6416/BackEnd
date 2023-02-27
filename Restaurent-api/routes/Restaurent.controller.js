const express = require("express");
const RestaurentItems = require("../models/restaurent");
const fs = require("fs");

const validator=require("../middlewares/validator")
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const result = validator(req.body);
    if (result) {
      const items = await RestaurentItems.create(req.body);
      return res.status(200).send(items);
    } else {
      return res.status(300).send(`{"err":"All the fields are not there"}`);
    }
  } catch (error) {
    console.error(error);
    res.send(500).send(error.message);
  }
});
router.get("/", async (req, res) => {
  try {
    const items = await RestaurentItems.find();
    return res.status(200).send(items);
  } catch (error) {
    console.error(error);
    res.send(500).send(error.message);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const items = await RestaurentItems.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    fs.appendFileSync(
      "records.txt",
      `The document with id:${items._id} has been updated.\n`,
      "UTF-8",
      { flags: "a+" }
    );
    return res.status(200).send(items);
  } catch (error) {
    console.error(error);
    res.send(500).send(error.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const items = await RestaurentItems.findByIdAndDelete(req.params.id);
    fs.appendFileSync(
      "records.txt",
      `The document with id:${items._id} has been deleted.\n`,
      "UTF-8",
      { flags: "a+" }
    );
    return res.status(200).send(items);
  } catch (error) {
    console.error(error);
    res.send(500).send(error.message);
  }
});

module.exports = router;
