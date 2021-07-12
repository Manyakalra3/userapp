const { GraphQLServer } = require("graphql-yoga");

const axios = require("axios");
const baseURL = `https://api.github.com/users`;

const convertResponse = (data) =>
  data.map((item) => ({
    id: item.id,
    login: item.login,
    avatar_url: item.avatar_url,
  }));
const resolvers = {
  Query: {
    user: () => {
      return axios.get(`${baseURL}`).then((res) => convertResponse(res.data));
    },
  },
};

const server = new GraphQLServer({
  typeDefs: "./Schema.graphql",
  resolvers,
});

server.start(() => {
  console.log(`Server is running on http://localhost:4000`);
});
