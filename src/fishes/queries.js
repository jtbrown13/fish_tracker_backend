const getFishes = "SELECT * FROM fish";
const getFishByID = "SELECT * FROM fish where id = $1";
const addNewFish = "Insert into fish (id,fishname) VALUES($1,$2)";

module.exports = {
    getFishes,
    getFishByID,
    addNewFish,
};