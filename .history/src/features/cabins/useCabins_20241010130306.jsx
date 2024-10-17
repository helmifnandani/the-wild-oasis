import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabin() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"], // harus array, ini kayak ID nya query ini
    queryFn: getCabins, // query function, yang responsible query/fetching data dari API, harus return promise
  });
  return { isLoading, cabins, error };
}
