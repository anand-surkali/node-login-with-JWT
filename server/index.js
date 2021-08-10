const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.get('*', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, '../project/build'));
  });
    
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});