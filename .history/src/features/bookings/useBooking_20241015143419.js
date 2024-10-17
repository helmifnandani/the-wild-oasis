import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"], // harus array, ini kayak ID nya query ini
    queryFn: () => getBooking(bookingId), // query function, yang responsible query/fetching data dari API, harus return promise
  });
  return { isLoading, booking, error };
}
