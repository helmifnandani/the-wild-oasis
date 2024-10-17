import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { isPending: isLoading, data: user } = useQuery({
    queryKey: [],
  });
}
