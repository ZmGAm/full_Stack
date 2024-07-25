const createpoolmodel=require('../models/createpoolmodel')
const bodyParser = require('body-parser')
module.exports.getpool = async (req, res) => {
    const _data = await createpoolmodel.findOne({  })
    if (_data) {
        return res.send({ code: 200, message: 'success', data: _data })
    } else {
        return res.send({ code: 500, message: 'Service error' })
    }
}
module.exports.viewpool = async (req, res) => {
 console.log("bcakned recived object",req.body)
    const { source } = req.body
    const location = await createpoolmodel.findOne({source:source})

    
    if (location) {
        if (location.destination.adress === destination.adress&&location.source.adress===source.adress) {
            return res.send({ code: 400, message: ' match success fully ', location:location})
        }
        else{

            return res.send({ code: 300, message: 'you cannot create more pool just add new vehical details' })
        }
        
        
    } else {
       
        
            return res.send({ code: 300, message: 'location not match' })
        
       
    }
}