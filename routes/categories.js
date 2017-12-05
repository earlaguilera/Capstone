const express=require('express');
const router=express.Router();
var mongojs=require('mongojs');
var db=mongojs('meanauth',['categories']);

router.get('/categories', function (req, res) {
    
      db.categories.find(function (err, docs) {
        res.json(docs);
      });
    });

    router.post('/categories', function (req, res) {
        db.categories.insert(req.body, function(err, doc) {
          res.json(doc);
        });
      });
      
      router.delete('/categories/:id', function (req, res) {
        var id = req.params.id;
        db.categories.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
          res.json(doc);
        });
      });
      
      router.get('/categories/:id', function (req, res) {
        var id = req.params.id;
        db.categories.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
          res.json(doc);
        });
      });
      
      router.put('/categories/:id', function (req, res) {
        var id = req.params.id;
        db.categories.findAndModify({
          query: {_id: mongojs.ObjectId(id)},
          update: {$set: {name: req.body.name, description: req.body.description, numtasks: req.body.numtasks}},
          new: true}, function (err, doc) {
            res.json(doc);
          }
        );
      });

      module.exports = router;