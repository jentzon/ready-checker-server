// eslint-disable-next-line no-unused-vars
import { IResolvers } from 'apollo-server';
import userResolver from './userResolver';
import roomResolver from './roomResolver';

export const userResolvers: IResolvers = {
  Query: {
    users: userResolver.allUsersQueryResolver,
    user: userResolver.findUserByIdQueryResolver,
    rooms: roomResolver.allRoomsQueryResolver,
    room: roomResolver.findByIdQueryResolver,
  },
};

export default userResolvers;
