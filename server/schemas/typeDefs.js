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

    type Mutation {
        addMessage(messageText: String!, messagerEmail: String!, messagerName: String!): Message
    }
`;

module.exports = typeDefs;