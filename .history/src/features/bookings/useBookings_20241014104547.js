import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  // Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // contoh filter greater than equal
  // : { field: "totalPrice", value: 5000, method: "gte" };

  // Sort By
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], // harus array, ini kayak ID nya query ini. Ini kayak useEffect dependancies, kalo ada yang berubah dari ini, maka akan re-fetch
    queryFn: () => getBookings({ filter, sortBy, page }), // query function, yang responsible query/fetching data dari API, harus return promise
  });

  // Pre-fetching
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortBy, page + 1],
    queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
  });

  return { isLoading, bookings, error, count };
}
