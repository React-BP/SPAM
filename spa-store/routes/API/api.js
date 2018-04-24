const router = require("express").Router();
const modelController = require("../../controllers/modelController");

router.route("/featured")
    .get(modelController.findFeaturedItems);

router.route("/store/:type")
    .get(modelController.findItems);
    
router.route("/:id")
    .get(modelController.findItem);

//router.route("/store/:type/gender")
  //  .get(modelController.findItemsByGender);

//router.route("/store/:type/sort")
   // .get(modelController.findSortedItems);

//router.route("/store/:type/gender/sort")
  //  .get(modelController.findSortedItemsByGender);

module.exports = router;