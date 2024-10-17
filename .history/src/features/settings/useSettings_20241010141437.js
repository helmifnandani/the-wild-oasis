import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isPending,
    errror,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
}
