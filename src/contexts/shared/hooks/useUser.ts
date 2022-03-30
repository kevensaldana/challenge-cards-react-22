import { useQuery } from "react-query";
import User from "../domain/User";
import AuthRepository from "../domain/UserRepository";

export const useUser = () => {
  const {
    data,
    isLoading,
    refetch: loadUser,
  } = useQuery("user", AuthRepository.findToken, {
    enabled: false,
    onSuccess: (user: User) => {
      localStorage.setItem("token", user.token);
    },
    initialData: () => {
      const token = localStorage.getItem("token");
      if (token) {
        return new User(token);
      }
      return null;
    }

  });

  return {
    user: data,
    loadUser,
    isLoading,
  };
};
