const createpoolmodel = require('../models/createpoolmodel')
const jwt = require('jsonwebtoken')
module.exports.createpool = async (req, res) => {

<<<<<<< HEAD
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
=======
    const { destination,source, Name, Model,seats,transmission,rent,time,ID,date } = req.body
    const idExists = await createpoolmodel.findOne({ ID: ID })

    
    if (idExists) {
        if (idExists.destination.adress === destination.adress&&idExists.source.adress===source.adress) {
            return res.send({ code: 400, message: ' pool is already created by same user ' })
        }
        else{

            return res.send({ code: 300, message: 'you cannot create more pool just add new vehical details' })
        }
        
        
    } else {
        const _res = await createpoolmodel.create({ destination,source, Name, Model,seats,transmission,rent,time,ID,date })
        if (_res) {
        
            return res.send({ code: 300, message: 'pool is created sucessfully ' })
>>>>>>> ec4ba55 (first commit)
        } else {
            return res.send({ code: 500, message: 'Service error' })
        }

<<<<<<< HEAD
        // return res.send({
        //     code: 200,
        //     message: 'login success',
        //     token: _token,
        //     type: userExists.type
        // })
        // return res.send({ code: 500, message: 'Service error' })
=======
       
    }
}
module.exports.getpool = async (req, res) => {
    const _data = await createpoolmodel.findOne({  })
    if (_data) {
        return res.send({ code: 200, message: 'success', data: _data })
    } else {
        return res.send({ code: 500, message: 'Service error' })
>>>>>>> ec4ba55 (first commit)
    }
}