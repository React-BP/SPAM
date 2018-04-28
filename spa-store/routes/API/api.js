const router = require("express").Router();
const modelController = require("../../controllers/modelController");

router.route("/featured")
    .get(modelController.findFeaturedItems);

router.route("/store/:type")
    .get(modelController.findItems);

router.route("/user/:id")
    .get(modelController.findOrder);

router.route("/cart/:id")
    .get(modelController.findOrderById)
    .put(modelController.updateOrder);
    
router.route("/:id")
    .get(modelController.findItem)
    .post(modelController.createOrder)
    .put(modelController.updateItem);


module.exports = router;