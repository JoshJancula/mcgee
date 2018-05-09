
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

 
  //  route loads main page
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
 
 
  //  route loads products
  app.get("/products", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/products.html"));
  });
 
  // route loads facility
  app.get("/facility", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/facility.html"));
  });
  
  // route loads about page
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });
  
  
  
};
