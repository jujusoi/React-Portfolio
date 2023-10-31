const typeDefs = `
    type Message {
        _id: ID
        messageText: String
        messagerName: String
        messagerEmail: String
    }

    type Query {
        messages: [Message]
    }
`;

module.exports = typeDefs;