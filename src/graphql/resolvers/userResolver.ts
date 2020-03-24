import {
  // eslint-disable-next-line no-unused-vars
  findAllUsers, findById, IUser,
} from '../../database/models/user';


export type UserResolverQueryArgs = { id: string }

const resolver = {
  allUsersQueryResolver: async () => {
    try {
      const allUsers = await findAllUsers();
      return allUsers;
    } catch (e) {
      return [];
    }
  },

  findUserByIdQueryResolver:
    async (_: any, args: UserResolverQueryArgs): Promise<IUser | null> => {
      const { id } = args;

      return findById(id);
    },
};

export default resolver;
