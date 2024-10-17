import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";

export function useChecking() {
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: () =>
      updateBooking(bookingId, { stateus: "checked-in", isPaid: true }),
  });
}
