const express=require('express');
const router=express.Router();
var mongojs=require('mongojs');
var db=mongojs('meanauth',['users']);

router.get('/allusers', function (req, res) {
    
      db.users.find(function (err, docs) {
        res.json(docs);
      });
    });

    router.post('/allusers', function (req, res) {
        var id=req.params.
        db.users.insert(req.body, function(err, doc) {
          res.json(doc);
        });
      });
      
      router.delete('/allusers/:id', function (req, res) {
        var id = req.params.id;
        db.users.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
          res.json(doc);
        });
      });
      
      router.get('/allusers/:id', function (req, res) {
        var id = req.params.id;
        db.users.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
          res.json(doc);
        });
      });
      
      router.put('/allusers/:id', function (req, res) {
        var id = req.params.id;
        db.users.findAndModify({
          query: {_id: mongojs.ObjectId(id)},
          update: {$set: {platform: req.body.platform, status: req.body.status, email_address: req.body.email_address, issue_description:req.body.issue_description, merchant_id:req.body.merchant_id, phone_number:req.body.phone_number, date:req.body.date, owner:req.body.owner, notes:req.body.notes}},
          new: true}, function (err, doc) {
            res.json(doc);
          }
        );
      });

      module.exports = router;