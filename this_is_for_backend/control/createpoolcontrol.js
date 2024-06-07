const createpoolmodel = require('../models/createpoolmodel')
const jwt = require('jsonwebtoken')
module.exports.createpool = async (req, res) => {

    const { destination,source, Name, Model,seats,transmission,rent,time,id,date } = req.body
    const idExists = await createpoolmodel.findOne({ id: id })

    
    if (idExists) {
        if (idExists.destination === destination&&idExists.source===source) {
            return res.send({ code: 400, message: ' pool is already created by same user ' })
        }
        
        
    } else {
        const _res = await createpoolmodel.create({ destination,source, Name, Model,seats,transmission,rent,time,id,date })
        if (_res) {
            // const _token = await jwt.sign({ ...idExists }, 'PRIV_123')
            // console.log("_res in backend ",_res);
            // console.log("res in backend ",_token);
            return res.send({ code: 300, message: 'pool is created sucessfully ', })
        } else {
            return res.send({ code: 500, message: 'Service error' })
        }

        // return res.send({
        //     code: 200,
        //     message: 'login success',
        //     token: _token,
        //     type: userExists.type
        // })
        // return res.send({ code: 500, message: 'Service error' })
    }
}