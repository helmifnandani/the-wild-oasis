import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["setting"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, updateSetting };
}
