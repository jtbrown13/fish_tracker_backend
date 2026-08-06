const pool = require('../../db');
const queries = require('./queries');

const getFishes = (req, res) => {
    pool.query(queries.getFishes, (error,results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

//controller filters on fish id
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
    })
}

module.exports ={
    getFishes,
    getFishByID,
};