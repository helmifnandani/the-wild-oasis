import { useMutation } from "@tanstack/react-query";
import {logout as logoutApi}
export function useLogout() {
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logout,
  });
}
