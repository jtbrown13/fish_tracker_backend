const express = require("express");
const fishRoutes = require("./src/fishes/routes");

const app = express();
const port = 8003;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res)=> {
    res.send("Hello Point Park!");
})

// API ROUTE
app.use("/api/v1/fishes", fishRoutes);

app.listen(port, () => console.log('running on ${port}'));