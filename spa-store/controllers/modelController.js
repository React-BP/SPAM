const db = require('../models');
const Item = require('../models/Item')

module.exports = {
    findFeaturedItems: function(req, res){
        console.log('looking for items');
        Item.find({})
               //.limit(3)
               .then((items) => {console.log('items is: ', items); res.json(items);})
               .catch(err => res.status(422).json(err));   
    },
    findItem: function(req, res){
        db.Item.findById(req.params.id)
            .then((item) => { console.log('item is: ', item); res.json(item);})
               .catch(err => res.status(422).json(err));
        
    },
    findItems: function(req, res){
        db.Item.find(req.query)
               .where('type')
               .equals(req.params.type)
            .then((items) => { console.log('items is: ', items); res.json(items);})
               .catch(err => res.status(422).json(err));
    },
    findSortedItems: function(req, res){
        db.Item.find(req.query)
               .where('type')
               .equals(req.params.type)
               .sort(req.params.sort)
            .then((items) => { console.log('items is: ', items); res.json(items);})
               .catch(err => res.status(422).json(err));
    },
    findItemsByGender: function(req, res){
        db.Item.find(req.query)
               .where('type')
               .equals(req.params.type)
               .where('gender')
               .equals(req.params.gender)
            .then((items) => { console.log('items is: ', items); res.json(items);})
               .catch(err => res.status(422).json(err));
    },
    findSortedItemsByGender: function(req, res){
        db.Item.find(req.query)
               .where('type')
               .equals(req.params.type)
               .where('gender')
               .equals(req.params.gender)
               .sort(req.params.sort)
            .then((items) => { console.log('items is: ', items); res.json(items)})
               .catch(err => res.status(422).json(err));
    }
}