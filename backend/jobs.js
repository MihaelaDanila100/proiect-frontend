module.exports.getAllJobs = (connection, response) => {
    let qr = `SELECT * FROM job`;
    connection.query(qr, (err, result) => {
        if(err) {
            response.status(500).json({message: err});
            throw Error(err);
        }
        response.status(200).json(result);
    });
}

module.exports.getFilteredJobs = (connection, response, request) => {
    let qr = `SELECT * FROM job`;
    let filters = Object.keys(request.body);
    if(filters.length > 0) {

        filters.forEach((key, index) => {
            if(index == 0) qr = qr + ' WHERE ';
            else qr = qr + ' AND ';
            qr = qr + `${key} LIKE '%${request.body[key]}%'`;
        });

    }
    connection.query(qr, (err, result) => {
        if(err) {
            response.status(500).json({message: err});
            throw Error(err);
        }
        response.status(200).json(result);
    });
}