import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: updateSetting } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
