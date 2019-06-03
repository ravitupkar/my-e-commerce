var mongoose = require('mongoose');
 
var contactSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    contact_name: String,
    contact_email: String,
    contact_message: String,
    created: { 
        type: Date,
        default: Date.now
    }
});
 
var contacts = mongoose.model('contacts', contactSchema);
 
module.exports = contacts;