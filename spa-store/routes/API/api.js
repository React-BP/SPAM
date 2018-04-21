const router = require("express").Router();
const modelController = require("../../controllers/modelController");

router.route("/:type")
    .get(modelController.findItems);

router.route("/:type/:gender")
    .get(modelController.findItemsByGender);

router.route("/:type/:sort")
    .get(modelController.findSortedItems);

router.route("/:type/:gender/:sort")
    .get(modelController.findSortedItemsByGender);

router.route("/featured")
    .get(modelController.findFeaturedItems);

router.route("/:id")
    .get(modelController.findItem);

module.exports = router;