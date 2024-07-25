const usermodel = require('../models/usermodel')
const jwt = require('jsonwebtoken')


module.exports.adduser = async (req, res) => {

    const { username,email, password, phone,type,dateofbirth,ID,date } = req.body
    const userExists = await usermodel.findOne({ username: username })
    
    if (userExists) {
        if (userExists.password === password) {
            return res.send({ code: 400, message: ' username or Password allready taken' })
        }
        // const _token = await jwt.sign({ ...userExists }, 'PRIV_123')
    }  else {
        const _res = await usermodel.create({ username, email, password, phone,type,dateofbirth,ID,date})
        if (_res) {
            const _token = await jwt.sign({ ...userExists }, 'PRIV_123')
            return res.send({ code: 300, message: 'signup sucessfully '})
        } else {
            return res.send({ code: 500, message: 'Service error' })
        }

    }
}

module.exports.loginuser = async (req, res) => {

    const { username, password } = req.body
    const userExists = await usermodel.findOne({ username: username })
    if (userExists) {
        if (userExists.password !== password) {
            return res.send({ code: 400, message: 'Username or Password wrong.' })
        }
        const _token = await jwt.sign({ ...userExists }, 'PRIV_123')

        return res.send({
            code: 200,
            message: 'login success',
            token: _token,
            type: userExists.type,
            ID: userExists.ID,
            username: userExists.username
        })
    } else {
        return res.send({ code: 500, message: 'user profile not exit ' })
    }
}