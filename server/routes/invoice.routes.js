const router = require("express").Router();
const controller = require("../controllers/invoice.controller");

router.post("/", controller.createInvoice);
router.get("/", controller.getInvoices);

module.exports = router;
