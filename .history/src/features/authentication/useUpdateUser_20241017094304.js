import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import { updateCurrentuser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentuser
    },
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateUser };
}
