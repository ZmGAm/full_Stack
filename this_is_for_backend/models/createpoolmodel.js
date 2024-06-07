
const mongoose = require('mongoose');

const createpoolmodel = mongoose.model('Pool', {
    destination: String,
    source: String,
    Name: String,
    Model: String,
    seats: String,
    transmission:String,
    rent:String,
    id:String,
    time: String,
    date: String,
});

module.exports = createpoolmodel
createpoolmodel.create({
    destination : 'DMIN',
    source: 'Munaeeer@gmail.com',
    Name: 'pass123',
    Model: '0307145600',
    seats:'0001-03-04',
    transmission:'unknown',
    rent:'unknown',
    time:'unknown',
    id:'unknown',
    date: new Date(),
})