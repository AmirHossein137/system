import toast from "react-hot-toast";
import ApiClient from "../config/ConfigApi";

export const LoginFetching = async (data) => {
  const response = await ApiClient.post("/signin", data).then((res) => {
    if (res) {
      toast.success(res.message);
    }
  });

  return response;
};
