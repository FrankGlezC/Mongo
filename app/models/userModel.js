const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    
        password:{
            type: String,
            required:true
        }
});
 
const newUserSchema = new Schema();
//modify a schema
newUserSchema.add(UserSchema).add({ 
    hasPet:{
        type: Boolean
    }
});

module.exports = mongoose.model('User',UserSchema);