const express = require("express");
const {
  addAdditionalList,
  getAdditionalLists,
  updateAdditionalList,
  deleteAdditionalList,
} = require("../controller/additionalLists");

const router = express.Router();

router.get("/getAdditionalLists", getAdditionalLists);
router.post("/addAdditionalList", addAdditionalList);
router.put("/updateAdditionalList/:id", updateAdditionalList);
router.delete("/deleteAdditionalList/:id", deleteAdditionalList);

module.exports = router;
