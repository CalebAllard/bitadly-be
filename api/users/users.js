const router = require('express').Router();
const db = require('./users-modle');

router.post('/', (req,res) => {
        
        
        db.findBy(req.body)
            .then(ret => {
                
                res.status(200).json(ret)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    

});


module.exports = router;