const { Message } = require('../models');

const resolvers = {
    Query: {
        messages: async () => {
            return Message.find().sort({ createdAt: -1 });
        },
    },
    Mutation: {
        addMessage: async (parent, { messageText, messagerEmail, messagerName }) => {
            return Message.create({ messageText, messagerEmail, messagerName });
        },
    },
};

module.exports = resolvers;