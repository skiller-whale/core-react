import type { Optimistic, User } from "lib/apiTypes.ts";
import type { FormEvent } from "react";
import { useActionState, useOptimistic, useState } from "react";
import { createUser, getUserFromFormData } from "../api";

type FormState = {
  users: User[];
  error: string | null;
};

const useNewUserFormState = (initialUsers: User[]) => {
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitNewUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const newUser = getUserFromFormData(formData);
    try {
      const response = await createUser(newUser);
      if ("error" in response) {
        throw new Error(response.error);
      } else {
        setUsers((prevUsers) => [...prevUsers, response.data]);
      }
    } catch (error) {
      const { message } = error as Error;
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return [{ users, error }, submitNewUser, isSubmitting] as const;
};

export default useNewUserFormState;
