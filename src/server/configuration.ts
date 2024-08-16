const configuration = {
  baseURL: process.env.NEXT_PUBLIC_API_ROUTE,
  paths: {
    getuser: "users",
    getUserByName: "users/name"
  },
};

export default configuration;
