const userId = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user == null) {
    return false;
  }
  return user.user.id;
};

const getId = (id) => id;

export { userId, getId };
