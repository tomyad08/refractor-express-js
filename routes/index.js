const {
  dataController,
  dataLengkap,
  dataId,
  dataNamaUpdate,
} = require("../controller/dataController");
const router = require("express").Router();

router.get("/data", dataLengkap);
router.get("/data/:id", dataId);
router.get("/datanama", dataNamaUpdate);

module.exports = router;
