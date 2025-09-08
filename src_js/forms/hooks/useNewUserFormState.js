import { useActionState, useEffect, useOptimistic, useState } from "react";
import { createUser, getUserFromFormData } from "../api";

const useNewUserFormState = (initialUsers) => {
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitNewUser = async (event) => {
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
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return [{ users, error }, submitNewUser, isSubmitting];
};

export default useNewUserFormState;
