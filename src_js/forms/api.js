export const getUsers = () =>
  fetch("/api/users").then((res) => res.json());

export const createUser = (user) => fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(user),
}).then((res) => res.json());

export const getUserFromFormData = (formData) => ({
  username: formData.get("username"),
  species: formData.get("species"),
});
