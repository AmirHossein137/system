import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { useEffect, useState } from "react";
import { businesstimingidFetching } from "../../services/LoginFetching";

const BusinesCombo = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    businesstimingidFetching("94C77A5F-615F-4FDE-8620-3A1400EC1F64", 1).then(
      (res) => {
        if (res.status === 200) {
          setItems(res.data.traceMessage.dataList);
        }
      }
    );
  }, []);

  let sportsDatas = [];
  items?.map((item) => {
    return sportsDatas.push(item.title);
  });


  console.log(sportsDatas)

  return (
    <ComboBoxComponent
      id="comboelement"
      value={sportsDatas[0]}
      dataSource={sportsDatas}
      placeholder="Select a Business"
    />
  );
};

export default BusinesCombo;
