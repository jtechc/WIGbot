const { Schema, model } = require('mongoose');

const reqString = { // You watched WOK to do this. --- Yes 
    type: String,
    required: true
}

const welcomeSchema = new Schema({
    _id: reqString,
    channelId: reqString,
    text: reqString
})

module.exports = model('welcome-channels', welcomeSchema);