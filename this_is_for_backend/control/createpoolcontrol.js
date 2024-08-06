const createpoolmodel = require('../models/createpoolmodel')
const jwt = require('jsonwebtoken')
module.exports.createpool = async (req, res) => {

    const { destination,source, Name, Model,seats,transmission,rent,time,ID,date } = req.body
    const idExists = await createpoolmodel.findOne({ ID: ID })

    
    if (idExists) {
        if (idExists.destination.adress === destination.adress&&idExists.source.adress===source.adress) {
            return res.send({ code: 400, message: ' pool is already created by same user ' })
        }
        else{

            return res.send({ code: 1200, message: 'you cannot create more pool just update details' })
        }
        
        
    } else {
        const _res = await createpoolmodel.create({ destination,source, Name, Model,seats,transmission,rent,updatedRent:rent,time,ID,date })
        if (_res) {
        
            return res.send({ code: 300, message: 'pool is created sucessfully ' })
        } else {
            return res.send({ code: 500, message: 'Service error' })
        }

       
    }
}
module.exports.updatepool = async (req, res) => {

    // const { ID } = req.params
    const { Rent,Seats,ID } = req.body
    console.log("bcakned recived object",req.body)
    const update= await createpoolmodel.findOneAndUpdate( {ID:ID} ,{updatedRent:Rent,seats:Seats})

    
    if (update) {
        
            return res.send({ code: 9000, message: ' pool is selected succesfully ' })
        
    } else {
        
            return res.send({ code: 700, message: 'pool not selected succesfully ' })
       
    }
}
module.exports.editpool = async (req, res) => {

    // const { ID } = req.params
    const { destination,source, Name, Model,seats,transmission,rent,time,ID,date } = req.body
    // console.log("bcakned recived object",req.body)
    const edit= await createpoolmodel.findOneAndUpdate( {ID:ID} ,{ destination:destination,source:source, Name:Name, Model:Model,seats:seats,transmission:transmission,rent:rent,updatedRent:rent,time:time,ID:ID,date:date })
    if (edit) {
        
            return res.send({ code: 25000, message: ' edit pool succesfully ' })
        
    } else {
        
            return res.send({ code: 700, message: 'some thing went worng ' })
       
    }
}
module.exports.getpool = async (req, res) => {
    const _data = await createpoolmodel.findOne({  })
    if (_data) {
        return res.send({ code: 200, message: 'success', data: _data })
    } else {
        return res.send({ code: 500, message: 'Service error' })
    }
}