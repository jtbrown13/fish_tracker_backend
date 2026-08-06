const getFishes = "SELECT * FROM fish";
const getFishByID = "SELECT * FROM fish where id = $1"

module.exports = {
    getFishes,
    getFishByID,
};