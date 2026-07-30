const pool = require('../../db');
const queries = require('./queries');

const getFishes = (req, res) => {
    pool.query(queries.getFishes, (error,results)=> {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

module.exports ={
    getFishes,
};