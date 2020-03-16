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

  findRoomByIdResolver:
      async (_: any, args: RoomResolverArgs): Promise<IRoom | null> => {
        const { id } = args;

        return findRoomById(id);
      },
};

export default resolver;
