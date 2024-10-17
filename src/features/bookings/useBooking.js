import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isPending: isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId], // harus array, ini kayak ID nya query ini
    queryFn: () => getBooking(bookingId), // query function, yang responsible query/fetching data dari API, harus return promise
    retry: false, // kalau fail, di retry 3 kali sama react query, kalau dikasih ini nggak pakai retry
  });
  return { isLoading, booking, error };
}
