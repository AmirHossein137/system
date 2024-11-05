import AuthApi from "../config/AuthApi";
import PublicApi from "../config/PublicApi";

export const LoginFetching = async (data) => {
  const response = await PublicApi.post("/signin", data, {
    headers: {
      Cookie: "refreshToken=%2BwSRnBTv3TKyatjwCXmJ6jPBlKIYtVqr5zfGpGW9NVc%3D",
    },
  });
  return response;
};

export const CoreServiceFetching = async () => {
  const refreshToken = "Tj2Iloffb4dNL11r4skpYWa2wSPjEvf63e0xwairaZw%3D";
  const resData =  await AuthApi.post(
    "/coreservice",
    {
      objectId: "94C77A5F-615F-4FDE-8620-3A1400EC1F64",
      actionType: "6",
      jsonValues: {
        pagination: {
          currentPage: 1,
          pageSize: 1000,
          orderByColumns: "id",
        },
        rules: {},
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: `refreshToken=${refreshToken}`,
      },
    }
  );
  return resData;
};

export const DataInfo = async () => {
  const refreshToken = "Tj2Iloffb4dNL11r4skpYWa2wSPjEvf63e0xwairaZw%3D";
  const dataFetch = await AuthApi.post(
    "/coreservice",
    {
      objectId: "94C77A5F-615F-4FDE-8620-3A1400EC1F64",
      actionType: "4",
      jsonValues: {
        id: 3,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: `refreshToken=${refreshToken}`,
      },
    }
  );
  return dataFetch;
};
