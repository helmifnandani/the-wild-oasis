import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please verify the new account from user's email address."
      );
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("There was a problem when creating account");
    },
  });

  return { signup, isLoading };
}
