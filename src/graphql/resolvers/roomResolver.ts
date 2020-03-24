import {
  // eslint-disable-next-line no-unused-vars
  findAllRooms, findRoomById, IRoom,
} from '../../database/models/room';

export type RoomResolverArgs = { id: string }

const resolver = {
  allRoomsQueryResolver: async () => {
    try {
      const allUsers = await findAllRooms();
      return allUsers;
    } catch (e) {
      return [];
    }
  },

  findByIdQueryResolver:
      async (_: any, args: RoomResolverArgs): Promise<IRoom> => {
        const { id } = args;

        let result;
        if (id) result = await findRoomById(id);
        if (!result) throw new Error('Could not find room with matching criteria.');

        return result;
      },
};

export default resolver;
