const { Message } = require('../models');

const resolvers = {
    Query: {
        messages: async () => {
            return Message.find();
        },
    },
};

module.exports = resolvers;