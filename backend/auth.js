const bcrypt = require("bcryptjs");

module.exports.logIn = (connection, response, request) => {
    let password = request.password;
    bcrypt.hash(password, 10, (err, hash) => {
        if(err) {
            response.status(500).json({message: "Something went wrong"});
            throw Error(err);
        }
        for(let table of ['candidates', 'recruiters']) {
            let qr = `SELECT * FROM ${table} WHERE username = '${request.username}'`;
            connection.query(qr, (err, result) => {
                if(err) {
                    response.status(500).json({message: err});
                    throw Error(err);
                }
                if(result.length > 0) {
                    let res = result[0]
                    bcrypt.compare(res.password, hash, function (err, isMatch) {
                        if(err) {
                            response.status(500).json({message: "Something went wrong"});
                            throw Error(err);
                        }
                        if (isMatch){
                            if(table === 'candidates') response.status(200).json({id: res.id_candidate, type: 'candidate'});
                            else response.status(200).json({id: res.id_recruiter, type: 'recruiter'});
                            return;
                        } 
                        response.status(200).json({message: "Wrong username or password"});
                        return;
                    });
                }
            });
        }
    });
}