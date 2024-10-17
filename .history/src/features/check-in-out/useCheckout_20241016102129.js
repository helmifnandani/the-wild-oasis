import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";

export function useCheckout() {
  const { mutate, isLoading } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
  });
}
