import ApiClient from "../config/ConfigApi";

export const LoginFetching = async (data) => {
  const response = await ApiClient.post("/signin", data).then((res) =>
    console.log(res)
  );

  return response;
};
