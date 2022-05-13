const userId = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user == null) {
    return false;
  }
  return user.id;
};

export default userId;
