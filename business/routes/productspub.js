var express = require('express');
var cors = require('cors');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://dtb_user:DtB_Us3r@127.0.0.1:27017/dtb_db', ['produits_pub']);
/* GET All Products */
router.get('/pub', cors(), function (req, res, next) {
    console.log("Get all Products");
    db.produits_pub.find(function (err, produits) {
        if (err) {
            res.send(err);
        } else {
            res.json(produits);
        }
    });
});


/* Get categories list */
router.get('/pub/categories', cors(), function (req, res, next) {
    console.log("Get products categories");
    db.produits_pub.distinct("categories",{}, function (err, categories) {
        if (err) {
            res.send(err);
        } else {
	    console.log("Categories list :" + JSON.stringify(categories));
            res.json(categories);
        }
    });
});


/* Search for Product */
router.get('/pub/search/:cat', cors(), function (req, res, next) {
    console.log("Product to search for :" + req.params.cat);
    db.produits_pub.find(
	{ categories : { $all : [req.params.cat] }}
, function (err, products) {
        if (err) {
            res.send(err);
        } else {
	    console.log("Searched Products :" + JSON.stringify(products));
            res.json(products);
        }
    });
});


/* GET One Product with the provided ID */
router.get('/pub/:id', cors(), function (req, res, next) {
    console.log("Get Product with id :" + req.params.id);
    db.produits_pub.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, product) {
        if (err) {
            res.send(err);
        } else {
            res.json(product);
        }
    });
});

/* POST/SAVE a Product */
router.post('/pub',  cors(), function (req, res, next) {
    var product = req.body;
    console.log("Product to save :" + JSON.stringify(product));
    if (!product.name || !(product.isCompleted + '')) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.produits_pub.save(product, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});
/* PUT/UPDATE a Product */
router.put('/pub/:id', cors(), function (req, res, next) {
    var product = req.body;
    var updObj = {};
    if (product.isCompleted) {
        updObj.isCompleted = product.isCompleted;
    }
    if (product.name) {
        updObj.name = product.name;
    }
    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.produits_pub.update({
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
/* DELETE a Product */
router.delete('/pub/:id', cors(), function (req, res) {
    db.produits_pub.remove({
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
