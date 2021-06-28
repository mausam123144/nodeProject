const mongoose = require("mongoose")
// const bcrypt = require("bcryptjs")




const employeeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },

})


// employeeSchema.pre("save", async function (next) {
//     if (this.isModified("password")) {

//         // console.log(`the current password is ${this.password}`);
//         this.password = await bcrypt.hash(this.password, 10);
//         // console.log(`the current password is ${this.password}`);
//         this.cpassword = undefined;
//     }
//     next()
// })





const RegisterUser = new mongoose.model(" RegisterUser ", employeeSchema);

module.exports = RegisterUser ;
