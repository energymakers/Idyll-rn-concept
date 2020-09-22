const authRoute = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'login',
          },
        },
      ],
    },
  },
};

export default authRoute;
