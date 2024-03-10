const app = require("./index");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`PLM server listening on port ${port}`);
});
