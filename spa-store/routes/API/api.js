const router = require("express").Router();
const modelController = require("../../controllers/modelController");

router.route("/featured")
    .get(modelController.findFeaturedItems);

router.route("/store/:type")
    .get(modelController.findItems);
    
router.route("/:id")
    .get(modelController.findItem);

module.exports = router;