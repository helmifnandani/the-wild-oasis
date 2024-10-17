import { useMutation } from "@tanstack/react-query";

export function useChecking() {
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation();
}
