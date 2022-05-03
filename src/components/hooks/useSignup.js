/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
import { useState } from 'react';

export function useSignup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (name, email, password) => {
    console.log(name, email, password);
    setError(null);
    setIsPending(true);
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            name,
            email,
            password,
          },
        }),
      });

      const result = await response.json();
      console.log(result);
      setIsPending(false);
      return result;
    } catch (err) {
      console.log(err.message);
      setIsPending(false);
      setError(err.message);
    }
  };
  return { error, isPending, signup };
}
