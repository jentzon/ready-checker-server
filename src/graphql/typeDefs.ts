
import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: String!
    name: String!
    nick: String
    joined: String
    mail: String
  }

  type ReadyStatus {
    id: String
    ready: Boolean
    ETA: Int
  }

  type ReadyCheck {
    startedBy: String!
    active: Boolean
    readyStatus: [ReadyStatus]
    created: String
    ttl: Int
  }

  type ReadyRoom {
    id: String!
    name: String!
    created: String!
    members: [String!]!
    pendingMembers: [String!]!
    admins: [String!]!
    rc: ReadyCheck
  }

  type Query {
    users: [User]
    user(id: String): User
    rooms: [ReadyRoom]
    room(id: String): ReadyRoom
  }
`;

export default typeDefs;
