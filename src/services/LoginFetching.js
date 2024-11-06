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
  const resData = await AuthApi.post(
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

// export const DataInfo = async () => {
//   const refreshToken = "Tj2Iloffb4dNL11r4skpYWa2wSPjEvf63e0xwairaZw%3D";
//   const dataFetch = await AuthApi.post(
//     "/coreservice",
//     {
//       objectId: "94C77A5F-615F-4FDE-8620-3A1400EC1F64",
//       actionType: "4",
//       jsonValues: {
//         id: 3,
//       },
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: `refreshToken=${refreshToken}`,
//       },
//     }
//   );
//   return dataFetch;
// };

export const businesstimingidFetching = async (objectId, id) => {
  const data = await AuthApi.post(
    "/coreservice",
    {
      objectId: objectId,
      actionType: "7",
      jsonValues: {
        selectList: ["id", "name"],
        relatedEntity: {
          type: "column",
          Name: "8B5106DA-DB86-4614-B0A5-4B635D16C128",
        },
        condition: [`id = ${id}`],
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
};

export const productidFetching = async (objectId, id) => {
  const dataProductId = AuthApi.post(
    "/coreservice",
    {
      objectId: objectId,
      actionType: "7",
      jsonValues: {
        selectList: ["id", "name"],
        relatedEntity: {
          type: "column",
          Name: "9323D41C-594D-42CC-8090-45AE80A85BF5",
        },
        condition: [`id = ${id}`],
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return dataProductId;
};
