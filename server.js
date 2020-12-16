const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

// setting up the express up
const PORT = process.env.PORT || 3000;
const app = express();

// seting up the express route to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static("public"));
// Import routes and give the server access to them.
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function() {
  console.log("Server listening on http://localhost:" + PORT);
});

  