module.exports.getAllSkills = (connection, response) => {
    let qr = `SELECT * FROM skills`;
    connection.query(qr, (err, result) => {
        if(err) {
            response.status(500).json({message: err});
            throw Error(err);
        }
        response.status(200).json(result);
    })
}