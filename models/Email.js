//string, unique, required, trimmed

const EmailSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
        }
    }
)

module.exports = EmailSchema;