const router = require("express").Router();
const modelController = require("../../controllers/modelController");

router.route("/wetsuits/:gender")
    .get(modelController.findWetsuits);

router.route("/clothing/:gender")
    .get(modelController.findClothing);

router.route("/accessories")
    .get(modelController.findAccessories);

router.route("/boards")
    .get(modelController.findBoards);

router.route("/featured")
    .get(modelController.findFeatured);

module.exports = router;