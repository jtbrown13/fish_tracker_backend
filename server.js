const express = require("express");
const cors = require("cors");

//Routes
const fishRoutes = require("./src/fishes/routes");

const app = express();
const port = 8003;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

//route
app.get("/", (req, res)=> {
    res.send("Hello Point Park!");
})

// API ROUTE
app.use("/api/v1/fishes", fishRoutes);

app.listen(port, () => console.log(`running on ${port}`));