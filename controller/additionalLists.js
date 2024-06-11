const AdditionalList = require("../model/AdditionalList");

const addAdditionalList = async (req, res) => {
  try {
    console.log("Incoming add request:", req.body);
    const newList = await AdditionalList.create({
      title: req.body.title,
      items: req.body.items || [],
    });
    console.log("New list created:", newList);
    res.status(200).json(newList);
  } catch (error) {
    console.error("Error in addAdditionalList:", error);
    res.status(500).json({ message: error.message });
  }
};

const getAdditionalLists = async (req, res) => {
  try {
    const lists = await AdditionalList.findAll();
    res.status(200).json(lists);
  } catch (error) {
    console.error("Error in getAdditionalLists:", error);
    res.status(500).json({ message: error.message });
  }
};

const updateAdditionalList = async (req, res) => {
  try {
    console.log("Incoming update request for ID:", req.params.id, req.body);
    const list = await AdditionalList.findByPk(req.params.id);
    if (list) {
      await list.update(req.body);
      console.log("List updated:", list);
      res.status(200).json(list);
    } else {
      res.status(404).json({ message: "List not found" });
    }
  } catch (error) {
    console.error("Error in updateAdditionalList:", error);
    res.status(500).json({ message: error.message });
  }
};

const deleteAdditionalList = async (req, res) => {
  try {
    const result = await AdditionalList.destroy({
      where: { id: req.params.id },
    });
    if (result) {
      res.status(200).json({ message: "List deleted successfully" });
    } else {
      res.status(404).json({ message: "List not found" });
    }
  } catch (error) {
    console.error("Error in deleteAdditionalList:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addAdditionalList,
  getAdditionalLists,
  updateAdditionalList,
  deleteAdditionalList,
};
