var express = require('express');
var router = express.Router();
var imageService = require('../services/imageService');

router.get("/",async(req, res)=>{
    try{
        const result = await imageService.getImages();
       // console.log("images===>", JSON.stringify(result));
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const result = await imageService.postImage(req.body);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;