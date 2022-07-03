const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            //match valid email address
            match: [
                /.+@.+\..+/,
                //if email doesn't match above criteria:
                'You must enter in a valid email.'
            ]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            //reference thought model
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            //self referencing the User model
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)

//store friend count as a virtual 
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length
})


//cast userschema into an actual user model.
const User = model('User', UserSchema)

module.exports = User;




