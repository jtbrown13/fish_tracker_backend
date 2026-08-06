const getFishes = "SELECT * FROM fish";
const getFishByID = "SELECT * FROM fish where id = $1";
const addNewFish = "Insert into fish (id,fishname) VALUES($1,$2)";
const updateFish = "update fish set fishname = $1 WHERE id = $2";

module.exports = {
    getFishes,
    getFishByID,
    addNewFish,
    updateFish,
};