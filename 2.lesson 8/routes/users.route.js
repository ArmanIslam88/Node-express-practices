const express = require ('express');
const router = express.Router();

router.get('/register',(req,res) => {
    res.send("i am a get register route");
});
router.get ('/login',(req,res) => {
    res.send("i am a get login route");
});
module.exports = router;