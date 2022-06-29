//string, unique, required, trimmed


const UsernameSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        }
    }
)

module.exports = UsernameSchema;