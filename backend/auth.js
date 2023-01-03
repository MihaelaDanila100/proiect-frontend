const bcrypt = require("bcryptjs");

module.exports.logIn = async (connection, response, request) => {
    for(let table of ['candidates', 'recruiters']) {
        let qr = `SELECT * FROM ${table} WHERE username = '${request.username}'`;
        await new Promise((resolve, reject) => {
            connection.query(qr, (err, result) => {
                if(err) {
                    response.status(500).json({message: err});
                    throw Error(err);
                }
                if(result.length > 0) {
                    let res = result[0]
                    bcrypt.compare(request.password, res.password, function (err, isMatch) {
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
                } else {
                    resolve("done");
                }
            });
        });
    }
    return response.status(404).json({message:"The user doesn't exist!"});
}

module.exports.signUp = (connection, response, request) => {
    if(request.accountType != 'candidates' && request.accountType != 'recruiters') {
        response.status(400).json({message: "Bad request"});
        throw TypeError("Bad request");
    }
    let table = request.accountType;
    bcrypt.hash(request.password, 10, (err, hash) => {
        if(err) {
            response.status(500).json({message: "Something went wrong"});
            throw Error(err);
        }
        let qr = '';
        if(table === 'candidates') {
            qr = `INSERT INTO ${table} (username, password, mail, fullName) VALUES ('${request.username}', '${hash}', '${request.mail}', '${request.fullName}')`;
        } else if(table === 'recruiters') {
            qr = `INSERT INTO ${table} (username, password, mail, fullname, company) VALUES ('${request.username}', '${hash}', '${request.mail}', '${request.fullName}', '${request.company}')`;
        }
        connection.query(qr, (err, result) => {
            if(err) {
                response.status(500).json({message: err});
                throw Error(err);
            }
            response.status(200).json({userId: result.insertId});
            return;
        });
    });

}