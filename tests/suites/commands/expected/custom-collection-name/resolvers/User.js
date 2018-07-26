module.exports = {
  Query: {
    async user(root, { _id }, ctx) {
      const { User } = ctx.models;
      return await User.findById(_id);
    },
    async people(root, { _ }, ctx) {
      const { User } = ctx.models;
      return await User.find();
    }
  },
  Mutation: {
    async createUser(root, { input }, ctx) {
      const { User } = ctx.models;
      return await User.create(input);
    },
    async updateUser(root, { _id, input }, ctx) {
      const { User } = ctx.models;
      return await (await User.findById(_id)).set(input).save();
    },
    async deleteUser(root, { _id }, ctx) {
      const { User } = ctx.models;
      return await (await User.findById(_id)).remove();
    }
  }
};
