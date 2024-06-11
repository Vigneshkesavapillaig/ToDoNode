const express = require("express");
const router = express.Router();
const AdditionalList = require("../model/AdditionalList");

const addAdditionalList = async (req, res) => {
  try {
    const newList = new AdditionalList({
      title: req.body.title,
      items: req.body.items || [],
    });
    const savedList = await newList.save();
    res.status(200).json(savedList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAdditionalLists = async (req, res) => {
  try {
    const lists = await AdditionalList.find();
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAdditionalList = async (req, res) => {
  try {
    const updatedList = await AdditionalList.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAdditionalList = async (req, res) => {
  try {
    const deletedList = await AdditionalList.findByIdAndDelete(req.params.id);
    if (!deletedList) {
      return res.status(404).json({ message: "List not found" });
    }
    res.status(200).json({ message: "List deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get("/getAdditionalLists", getAdditionalLists);
router.post("/addAdditionalList", addAdditionalList);
router.put("/updateAdditionalList/:id", updateAdditionalList);
router.delete("/deleteAdditionalList/:id", deleteAdditionalList);

module.exports = router;
