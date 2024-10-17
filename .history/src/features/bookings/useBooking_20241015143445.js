import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
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
    retry: false,
  });
  return { isLoading, booking, error };
}
