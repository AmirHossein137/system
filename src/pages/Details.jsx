import { useEffect } from "react";
import { CoreServiceFetching } from "../services/LoginFetching";
import { useDispatch } from "react-redux";
import { setData } from "../app/features/data/DataGridSlice";
import DataGrid from "../components/module/DataGrid";
import ModalInfo from "../components/module/ModalInfo";

const Details = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    CoreServiceFetching().then((res) => {
      if (res.status === 200) {
        dispatch(setData(res.data.traceMessage));
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="mb-4">
        <ModalInfo />
      </div>
      <DataGrid />
    </div>
  );
};

export default Details;
