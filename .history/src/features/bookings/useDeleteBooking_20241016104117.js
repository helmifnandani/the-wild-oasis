import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success("booking succesfully deleted");
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
