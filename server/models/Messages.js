const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    messageText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000,
        trim: true,
    },
    messagerName: {
        type: String,
        required: true,
        trim: true
    },
    messagerEmail: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (input) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(input);
            },
            message: 'Invalid format',
        },
    },
});

const Message = model('Message', messageSchema);

module.exports = Message;