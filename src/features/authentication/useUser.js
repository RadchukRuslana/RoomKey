import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
export function useUser() {
  const {
    isPending,
    fetchStatus,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return {
    isPending,
    user,
    isAuthenticated: user?.role === "authenticated",
    fetchStatus,
  };
} //get current user and store it to the cache - no need to redownload it every time
