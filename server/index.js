const express = require("express");
// const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  // app.get('*', (req, res) => {
  //   console.log(__dirname);
  //   res.sendFile(path.resolve(__dirname, '../project/build/index.html'))
  // });

const root = require('path').join(__dirname, 'project', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
    
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});