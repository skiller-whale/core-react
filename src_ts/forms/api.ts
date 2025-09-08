import type { User } from "lib/apiTypes.ts";

export type ApiResponse<Type> =
  | { data: Type }
  | { error: string };

export const getUsers = (): Promise<{ data: User[] }> =>
  fetch("/api/users").then((res) => res.json());

export const createUser = (user: User): Promise<ApiResponse<User>> => fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(user),
}).then((res) => res.json());

export const getUserFromFormData = (formData: FormData): User => ({
  username: formData.get("username") as User["username"],
  species: formData.get("species") as User["species"],
});
