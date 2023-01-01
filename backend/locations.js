module.exports.getAllLocations = (connection, response) => {
    let qr = `SELECT * FROM locations`;
    connection.query(qr, (err, result) => {
        if(err) {
            response.status(500).json({message: err});
            throw Error(err);
        }
        response.status(200).json(result);
    });
}

module.exports.getFilteredLocations = (connection, response, request) => {
    let searchedName = request.body.name;
    if(!searchedName) {
        response.status(400).json({message: "Bad request"});
        throw TypeError("Bad request");
    } 
    let qr = `SELECT * FROM locations WHERE name LIKE '%${searchedName}%'`;
    connection.query(qr, (err, result) => {
        if(err) {
            response.status(500).json({message: err});
            throw Error(err);
        }
        response.status(200).json(result);
    });
}