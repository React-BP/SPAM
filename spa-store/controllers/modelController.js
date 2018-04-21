const db = require('../models');

module.exports = {
    findFeatured: function(req, res){
        db.Item.find(req.query).limit(3)    
    },
    findWetsuits: "",
    findWetsuitsMale: "",
    findWetsuitsFemale: "",
    findBoards: "",
    findClothing: "",
    findClothingMen: "",
    findClothingWomen: "",
    findAccessories: "",

}