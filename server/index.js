const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../project/build')));


    
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});