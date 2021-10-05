
 const express = require("express");
 const path = require("path");
 
 const app = express();

 const port = process.env.PORT || 5000;
 
 // production
 if (process.env.NODE_ENV === "production") {
   // link React frontend
   app.use(express.static("build"));
 
   // any routes called that are not handled by server are forwarded to frontend
   app.get("*", (req, res) => {
     res.sendFile(path.join(__dirname, "build", "index.html"));
   });
 
   // development
 } else {
   app.get("/", (req, res) => {
     res.status(200).json({ message: "Abandon All Hope Ye Who Enter Here..." });
   });
 }
 
app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log('Server running on port', port);
});
 