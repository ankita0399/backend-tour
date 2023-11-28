import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!!!", err);
  });

/*
import express from "express";
const app = express();


(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR: error");
      throw error;
    });

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch {
    console.error("Error: ", error.message);
    throw err;
  }
})();
*/

// import dotenv from 'dotenv';
// dotenv.config();
// import express from "express";
// const app = express();
// const port = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//     res.send("Hello World Ankita");
// })

// app.get('/about', (req, res) => {
//     res.send("About Page")
// })

// app.get("/json", (req,res) => {
//     res.json({
//         name: "JOHN DOE",
//         age: 22,
//     })
// })

// app.listen(port, () => {
//     console.log(`Server is listening to port ${port}`)
// });
