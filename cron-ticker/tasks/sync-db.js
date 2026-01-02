let times = 0;

const sync_db = () => {
    times++;
    console.log("Tick multiplo de 5 ", times);

    return times;
}

module.exports = {
    sync_db
}