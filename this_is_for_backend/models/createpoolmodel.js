
const mongoose = require('mongoose');

const createpoolmodel = mongoose.model('Pool', {
<<<<<<< HEAD
    destination: String,
    source: String,
=======
    destination: {},
    source: {},
>>>>>>> ec4ba55 (first commit)
    Name: String,
    Model: String,
    seats: String,
    transmission:String,
    rent:String,
<<<<<<< HEAD
    id:String,
=======
    ID:String,
>>>>>>> ec4ba55 (first commit)
    time: String,
    date: String,
});

module.exports = createpoolmodel
createpoolmodel.create({
<<<<<<< HEAD
    destination : 'DMIN',
    source: 'Munaeeer@gmail.com',
=======
    destination : {},
    source: {},
>>>>>>> ec4ba55 (first commit)
    Name: 'pass123',
    Model: '0307145600',
    seats:'0001-03-04',
    transmission:'unknown',
    rent:'unknown',
    time:'unknown',
    id:'unknown',
    date: new Date(),
})