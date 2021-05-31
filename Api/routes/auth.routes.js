const router = require('express').Router();
const AuthController = require('../controllers/auth.controller');
const ac = new AuthController();

router.post('/register', (req, res) => {
    const creds = req.body;
    ac.registerUser(creds)
    .then((payload) => {
        req.session.user = payload;
        res.status(200).json(payload);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
    
});

router.post('/login', (req, res) => {
    const creds = req.body;
    ac.loginUser(creds)
    .then((data) => {
        req.session.user = data;
        res.status(200).json(data)
    })
    .catch((error) => {
        res.status(400).json(error);
    })
});

router.post('/logout', (req, res) => {
    ac.logoutUser()
    .then((data) => {
        req.session.user = undefined;
        res.status(200).json((data))          
    })
    .catch((error) => {
        res.status(400).json(error)  
    })
})
module.exports = router;