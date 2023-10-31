const { Message } = require('../models');

const resolvers = {
    Query: {
        messages: async () => {
            return Message.find().sort({ createdAt: -1 });
        },
    },
};

module.exports = resolvers;