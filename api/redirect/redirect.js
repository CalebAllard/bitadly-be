const router = require('express').Router();
const db = require('./redirect-modle');


router.get('/:shortid', (req, res) => {
    
    const shortID = req.params.shortid
    db.findByShortId(shortID)
    .then(ret => {
        const url = ret.target_url;
        res.redirect(url);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err: 'oups had a bobo'})
    })
})



module.exports = router;