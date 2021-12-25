const mongoose = require("mongoose");
const bc = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 8,
    },
    dob: Date,
    password: {
        type: String,
        required: true
    },
    todos: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }
    ]
}, {
    timestamps: true

},
    {
        toJSON:{
            transform: function () {
                console.log(arguments);
            }
        }
    }
)

userSchema.pre('save', function () {
    const hash = bc.hashSync('password', 8)
    this.password = hash

})

const Users = mongoose.model('Users', userSchema)


module.exports = Users;