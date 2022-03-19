type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = {
  username: 'Augusto',
  password: '123Pão',
};

const sentUser = {
  username: 'Augusto',
  password: '123Pão',
};

console.log(verifyUser(bdUser, sentUser));
