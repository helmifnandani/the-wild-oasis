import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
export function useLogout() {
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
  });
}
