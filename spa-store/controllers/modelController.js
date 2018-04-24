const db = require('../models');
//const Item = require('../models/Item');

module.exports = {
    findFeaturedItems: function(req, res){
        db.Item.find()
               .limit(3)
               .then((items) => {res.json(items);})
               .catch(err => res.status(422).json(err));   
    },
    findItem: function(req, res){
        db.Item.findById(req.params.id)
            .then((item) => {res.json(item);})
               .catch(err => res.status(422).json(err));
        
    },
    findItems: function(req, res){

        /**HANDLES A TYPO IN THE DB. REMOVE ONCE RESEEDED.*/
        if(req.params.type == 'wetsuits'){
            req.params.type = " " + req.params.type;
        }

        db.Item.find()
               .where('type')
               .equals(req.params.type)
            .then((items) => {res.json(items);})
               .catch(err => res.status(422).json(err));
    },
}