import { useMutation } from "@tanstack/react-query";

export function useCheckout() {
  const { mutate, isLoading } = useMutation();
}
