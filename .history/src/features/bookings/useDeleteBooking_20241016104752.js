import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { useLocation, useNavigate } from "react-router-dom";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();
  // const isNavigate = location.pathname.includes(bookingId)

  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: (data) => {
      toast.success("booking succesfully deleted");
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}
