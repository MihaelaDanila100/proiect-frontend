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