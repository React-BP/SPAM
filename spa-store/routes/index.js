const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API/api");


router.use("/api", apiRoutes);

if( process.env === 'PRODUCTION'){
    router.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
} 
module.exports = router;