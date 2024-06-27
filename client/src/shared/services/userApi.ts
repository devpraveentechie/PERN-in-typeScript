export const getUsers = async () => {
  const response = await fetch("/users");
  const users = response.json();
  return users;
};

export const getUser = async (id: number) => {
  const user = await fetch(`/users/${id}`);
  return user.json();
};
