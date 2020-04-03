const router = require('express').Router();
const db = require('./url-modle');
const shortid = require('shortid');

//   required data you get from front end
// {
//     "short_url": "the short url", string
//     "target_url": "long url", string
//     "user_id": "user id of creator" interget
// }

router.get('/', (req,res) => {
    // get list of all urls
    
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    db.findById(id)
    .then(ret => {
        res.status(200).json(ret);
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: 'Oups we had a bobo'});
    })
})

router.post('/', (req,res) => {
    // add new url
    const {target_url,user_id} = req.body;
    const shorturl = shortid.generate();
    // steps
    const payload = {
        short_url:`${process.env.BASE_URL}/${shorturl}`,
        shortid: shorturl,
        target_url: target_url,
        user_id: user_id
    }
    // create new short id
    db.add(payload)
        .then(ret => {
            res.status(201).json(ret);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    // add to database



});

router.post('/:id', (req,res) => {
    const { id } = req.params;
    db.findBy(id)
    .then(ret => {
        console.log(ret);
        if(ret.id !== {} ){
        return ret;
        }else{
            throw error;
        }
    })
    .then(ret =>{
        const payload = {
            
            short_url: ret.short_url,
            target_url: req.body.target_url,
            user_id: ret.user_id
        }
        
        db.edit(payload).then(ret =>{
            res.status(201).json(ret);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json(err);
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
    // edit url
    // edit url can only change target url*
})

router.delete('/:id', (req,res) => {
    // delete url
})


module.exports = router;