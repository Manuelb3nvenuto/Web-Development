import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
   
})


app.get("/contact", (req, res) => {
    res.send("<h2>This its where you can contact me!</h2>");
   
})

app.get("/about", (req, res) => {
    res.send("<h3>Hey can we talk about me?</h3>");
   
})

app.listen(port, () => {   
    console.log(`Server running on port: ${port}.`); 
});