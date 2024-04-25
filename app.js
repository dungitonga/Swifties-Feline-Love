const express = require("express");
const ejs = require("ejs")

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function(req, res){

    const url = "https://api.thecatapi.com/v1/breeds"
    const api_key = process.env.API_KEY

    fetch(url,{headers: {'x-api-key': api_key}})
   .then((response) => {
     return response.json();
   })
   .then((data) => {
      const catData = data;

      res.render("home", {addContent : catData});
    
    });

});

app.listen(3000, () =>{
    console.log("Server started at port 3000");
});