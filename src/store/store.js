const store = (name, email, profile_pic, status, user_id) => ({
  user: {
    name,
    email,
    profile_pic,
    status,
    user_id,
  },
  messages: {
    use_id_1: {
      0: {
        text: 'hello',
        is_user_msg: false,
      },
      1: {
        text: 'hello',
        is_user_msg: false,
      },
    },
    use_id_2: {
      0: {
        text: 'Hey',
        is_user_msg: true,
      },
    },
  },
  contacts: {
    user_id: {
      name,
      email,
      profile_pic,
      status,
    },
    user_id: {
      name,
      email,
      profile_pic,
      status,
    },
  },
});
