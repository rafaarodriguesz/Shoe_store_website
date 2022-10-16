const express = require("express");
const User = require("../models/User");
const router  = express.Router();

// add page
router.post("/cadastrar", async (req,res) => {
    console.log(req.body);

    await User.create(req.body)
    .then(() => {
        return res.redirect("/");
        
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "erro"
        });
    });
    // res.send("pagina cadastrar");
})


router.get("/", (req,res) =>{
    res.render("index");
});

router.get("/add", (req,res) => {
    res.render("add");
});


module.exports = router