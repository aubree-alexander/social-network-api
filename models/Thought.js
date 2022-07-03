const formatDate = require('../utils/dateFormat.js')
const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        }, 
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //set getter to grab date formatter which imports into this.
            get: timestamp => formatDate(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            //becomes an array of reactionschema objects (above)
            reactionSchema
        ]
    },
    {
        toJSON: {
            virtuals: true,
            //turn timestamp on
            getters: true
        }
    }
)

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;