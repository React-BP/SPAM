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
    updateItem: function(req, res){
        console.log('update item id is: ', req.params.id);
        db.Item.findByIdAndUpdate(req.params.id, JSON.parse(req.data.item))
               .then((item) => res.json(item))
               .catch(err => res.status(422).json(err));
    },
    findOrder: function(req, res){
        console.log('finding order');
        db.Order.find()
                .where('user')
                .equals(req.params.id)
                .then((order) => res.json(order))
                .catch(err => res.status(422).json(err));
    },
    findOrderById: function(req, res){
        console.log('id is: ', req.params.id);
        db.Order.findById(req.params.id)
                .then((order) => res.json(order))
                .catch(err => res.status(422).json(err));
    },
    createOrder: function(req, res){
        db.Order.create(JSON.parse(req.data.item))
                .then((order) => res.json(order))
                .catch(err => res.status(422).json(err));
    },
    updateOrder: function(req, res){
        console.log('id is: ', req.params.id);
        db.Order.findByIdAndUpdate(req.params.id, JSON.parse(req.data.order))
            .then((order) => {
                res.json(order);
            })
    }
}