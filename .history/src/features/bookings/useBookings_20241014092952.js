import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  // Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
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
