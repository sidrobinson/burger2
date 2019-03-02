// let express = require("express");
// let path = require("path");

// // EXPRESS CONFIGURATION
// // This sets up the basic properties the server

// // Tells node that we are creating an "express" server
// let app = express();
// app.use(express.static("public"));

// // Sets an initial port. We"ll use this later in the listener
// let PORT = process.env.PORT || 9000;

// // express.json and express.urlEncoded make it easy for the server to interpret data sent to it.
// // The code below is pretty standard.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // app.use(express.static("css"));
// // app.use("/css", express.static(path.join(__dirname, "/css")));

// // ROUTER
// // The below points the server to a series of "route" files.
// // These routes give the server a "map" of how to respond when users visit or request data from various URLs.
// let routes = require("./controllers/burgerController");
// app.use(routes)
// // require("./app/routing/htmlRoutes")(app);

// // LISTENER
// // The below code "starts" the server
// // app.get("/", function(req, res) {
// //   res.sendFile(path.join(__dirname, "./index.html"));
// // });

// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });

let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgerController.js");

app.use('/', routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
