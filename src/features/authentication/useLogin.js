import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
export function useLogin() {
  const queryClient = useQueryClient(); // we will use it to manually place cache from auth with supabase to the cache of react-query, so there will be no  need to show annoying spinner after logging in

  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user); // manually set some data into the react query cache
      //data is the result of the loginApi function
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(
        "Provided email or password are incorrect. Please try again."
      );
    }, //error returned(thrown) from the loginApi function
  });
  return { login, isPending };
}
