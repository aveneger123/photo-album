let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photoalbum')
    .then(function() {
        console.log("database connected")
    })
    .catch(function(e) {
        console.log(e)
    })
let UserSchema = mongoose.Schema({
    name: String,
    avatar: String
})
module.exports = mongoose.model('photo', UserSchema)