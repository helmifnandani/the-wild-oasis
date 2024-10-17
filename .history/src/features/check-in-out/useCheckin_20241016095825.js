import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useChecking() {
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: () =>
      updateBooking(bookingId, { stateus: "checked-in", isPaid: true }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
    },
  });
}
