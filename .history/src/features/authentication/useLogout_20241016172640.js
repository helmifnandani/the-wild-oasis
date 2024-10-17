import { useMutation } from "@tanstack/react-query";

export function useLogout() {
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logout,
  });
}
