import { gql } from '@apollo/client';

export const ADD_MESSAGE = gql`
    mutation addMessage($messageText: String!, $messagerEmail: String!, $messagerName: String!) {
        addMessage(messageText: $messageText, messagerEmail: $messagerEmail, messagerName: $messagerName) {
            _id
            messageText
            messagerEmail
            messagerName
        }
    }
`;