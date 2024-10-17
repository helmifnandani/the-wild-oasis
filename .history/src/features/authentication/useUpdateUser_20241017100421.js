import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentuser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentuser,
    onSuccess: (user) => {
      toast.success("User account successfully updated");
      queryClient.invalidateQueries({
        active: true,
      });
      debugger;
      queryClient.setQueriesData("user", user.user);
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateUser };
}
