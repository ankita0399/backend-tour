import dotenv from 'dotenv';
dotenv.config();
import express from "express";
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("Hello World Ankita");
})

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get("/json", (req,res) => {
    res.json({
        name: "JOHN DOE",
        age: 22,
    })
})

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
});