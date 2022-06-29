//string, unique, required, trimmed
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
            //gives it the _id
            type: Schema.Types.ObjectId,
            //references thought model
            ref: 'Thought'
        }],
        friends: [{
            //gives it the _id
            type: Schema.Types.ObjectId,
            //self referencing 
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)

//virtuals are like data columns that don't get stored in db. get stored in json data.
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length
})


//casts userschema into an actual user model.
//first is reference, second is the schema
const User = model('User', UserSchema)

module.exports = User;




