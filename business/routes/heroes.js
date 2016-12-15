var express = require('express');
var cors = require('cors');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://dtb_user:DtB_Us3r@127.0.0.1:27017/dtb_db', ['heroes']);
/* GET All Todos */
router.get('/heroes', cors(), function (req, res, next) {
    db.heroes.find(function (err, heroes) {
        if (err) {
            res.send(err);
        } else {
            res.json(heroes);
	    //res.send('{"_id":1,"name":"test"}');
        }
    });
});
/* GET One Todo with the provided ID */
router.get('/heroes/:id', cors(), function (req, res, next) {
    console.log("Searched id :" + req.params.id);
    db.heroes.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, heroes) {
        if (err) {
            res.send(err);
        } else {
            res.json(heroes);
        }
    });
});
/* POST/SAVE a Todo */
router.post('/heroes',  cors(), function (req, res, next) {
    var hero = req.body;
    console.log("Hero to save :" + hero.text);
    if (!hero.text || !(hero.isCompleted + '')) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.heroes.save(hero, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});
/* PUT/UPDATE a Todo */
router.put('/heroes/:id', cors(), function (req, res, next) {
    var hero = req.body;
    var updObj = {};
    if (hero.isCompleted) {
        updObj.isCompleted = hero.isCompleted;
    }
    if (hero.text) {
        updObj.text = hero.text;
    }
    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.heroes.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});
/* DELETE a Todo */
router.delete('/heroes/:id', cors(), function (req, res) {
    db.heroes.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});
module.exports = router;
