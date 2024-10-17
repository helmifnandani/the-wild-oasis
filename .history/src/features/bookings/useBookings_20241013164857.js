import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useCabins() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"], // harus array, ini kayak ID nya query ini
    queryFn: getBookings, // query function, yang responsible query/fetching data dari API, harus return promise
  });
  return { isLoading, bookings, error };
}
