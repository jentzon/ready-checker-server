import { IResolvers } from 'apollo-server';
import userResolver from './userResolver';
import roomResolver from './roomResolver';

export const userResolvers: IResolvers = {
  Query: {
    users: userResolver.allUsersQueryResolver,
    user: userResolver.findUserByIdResolver,
    rooms: roomResolver.allRoomsQueryResolver,
    room: roomResolver.findRoomByIdResolver,
  },
};

export default userResolvers;
