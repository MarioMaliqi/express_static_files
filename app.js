const express = require("express");

const app = express();

const PORT = 8000;

// all the methods being used

// app.get()
// app.post()
// app.put()
// app.delete()
// app.all()
// app.use()
// app.listen()


app.get("/", (req, res) => {
  console.log("user has hit the home page");
  res.status(200).send("<h1> Home Page </h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1> About Page </h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1> resource not found </h1>")
});

// when server is being instanceiated, this is run
app.listen(PORT, () => {
  console.log(`app listening on http://localhost:${PORT}`);
});
