const pool = require('../../db');
const queries = require('./queries');

// GET ALL FISH
const getFishes = (req, res) => {
    pool.query(queries.getFishes, (error,results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

//controller filters on FISH ID
//author: John Brown
//date: 8/6/2026
const getFishByID = (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) {
        return res.status(400).json({error: "invalid value format"});
    }
    console.log("Recieved FishID");
    pool.query(queries.getFishByID, [id], (error,results)=> {
        if(error){
            console.error("Database Error", error);
            return res.status(500).json({error: "Fish Not Found"});
        }
        res.status(200).json(results.rows);
    });
}

//Post (add new fish information)
const addNewFish = (req, res) => {
    const { id, fishname } = req.body;
    pool.query(queries.addNewFish, [id, fishname], (error,results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

// PUT (modify account infomration)
const updateFish = (req, res) => {
    const id = parseInt(req.params.id);
    const { fishname } = req.body;
    pool.query(queries.updateFish, [fishname, id], (error,results)=> {
        if(error)throw error;
        //res.status(200).json(results.rows);
        res.status(201).send("Succesfully modified a fish");
    });
};

module.exports ={
    getFishes,
    getFishByID,
    addNewFish,
    updateFish,
};