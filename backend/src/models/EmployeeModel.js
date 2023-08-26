const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const employeeSchema = new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    cnicNumber:{type:String,required:true},
    role:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    description:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    pass:{type:String,required:true},
},
{timestamps:true}
);

employeeSchema.methods.matchPassword = async function(enterPass){
    return await bcrypt.compare(enterPass, this.pass);
}

employeeSchema.pre("save",async function(next){
    if(!this.isModified){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.pass = await bcrypt.hash(this.pass,salt)
})

module.exports = mongoose.model("Employee",employeeSchema);