const express    = require('express');
const app        = express();
const PORT       = 8080;
const User       = require('./models/User');
const exphbs     = require('express-handlebars');
const route      = require("./routes/way");
const bodyParser = require('body-parser');
const path       = require("path");
app.use(express.json());

// test route
app.get('/test', async (req,res) => {
    res.send("test page");
});

// handlebars + body parser
app.use(bodyParser.urlencoded({extended:true}))
app.engine('handlebars', exphbs.engine());
app.set('view engine','handlebars')
app.set('views', __dirname + '/views');

//stacti folder
app.use(express.static(path.join(__dirname, "public")));

//port
app.listen(PORT, () => {
    console.log(`servidor iniciado na porta ${PORT}`)
});

//way routes
app.use(route);





// console.log(req.body);

//     await User.create(req.body)
//     .then(() => {
//         return res.status(400).json({
//             erro: false,
//             mensagem: "Usuario cadastrado com sucesso"
//         });
//     }).catch(() => {
//         return res.status(400).json({
//             erro: true,
//             mensagem: "erro"
//         });
//     });
//     // res.send("pagina cadastrar");