import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const queryClient = useQueryClient();

const { isLoading: isDeleting, mutate } = useMutation({
  mutationFn: deleteCabin,
  onSuccess: () => {
    toast.success("cabin succesfully deleted");
    queryClient.invalidateQueries({
      queryKey: ["cabins"],
    });
  },
  onError: (err) => toast.error(err.message),
});
