let express = require("express");
let app = express();
let cors = require('cors');
let path = require('path');

app.use(cors());

app.use(function(req, res, next){
    console.log(`${new Date()} - ${req.method} reqest for ${req.url}`);
    next();
});

app.use(express.static(path.join(__dirname, "../static")));

app.listen(8081, function(){
    console.log("Serving at 8081")
});
