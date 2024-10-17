import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => {
      createEditCabin(newCabinData, id);
    },
    onSuccess: (data) => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({
        active: true,
      });
      debugger;
      queryClient.setQueriesData("user", data);
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
