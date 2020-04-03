const router = require('express').Router();
const db = require('./auth-modle');
const bc = require('bcrypt');


router.post('/login', (req, res) => {
    let { email, password } = req.body;

    db.findBy({ email })
        .first()
        .then(user => {
            if (user && bc.compareSync(password, user.password)) {
                req.session.loggedIn = true; 
                req.session.userId = user.id;
                
                res.status(200).json( { user: {id:user.id,username:user.username,email:user.email} , session: req.sessionID});
            } else {
                res.status(401).json({ err: "Wrong email or password" });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });

});


router.post('/reg',(req, res) => {
    let user = req.body;

    const hash = bc.hashSync(req.body.password,10);
    user.password = hash;

    db.add(user)
        .then(ret => {
        res.status(201).json(ret);
    })
        .catch(err => res.status(500).json(err));

});






module.exports = router;