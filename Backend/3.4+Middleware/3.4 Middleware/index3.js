import express from "express";

const app = express();
const port = 3000;

app.use(logger);

function logger (req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>If this goes well, you can see the get type of the request</h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
