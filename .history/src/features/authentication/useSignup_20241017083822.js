import { useMutation } from "@tanstack/react-query";

export function useSignup() {
  const { mutate, isPending } = useMutation({
    mutationFn: signup,
  });
}
