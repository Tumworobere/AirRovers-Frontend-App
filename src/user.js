const userId = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user == null) {
    return false;
  }
  return user.user.id;
};

const getId = (id) => {
  console.log(id);
  return id;
};

export { userId, getId };
