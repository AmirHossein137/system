import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { useEffect, useState } from "react";
import { productidFetching } from "../../services/LoginFetching";
const ProductIdCombo = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    productidFetching("94C77A5F-615F-4FDE-8620-3A1400EC1F64", 5).then((res) => {
      if (res.status === 200) {
        setItems(res.data.traceMessage.dataList);
      }
    });
  }, []);

  let sportsDatas = [];
  items?.map((item) => {
    return sportsDatas.push(item.title);
  });

  return (
    <ComboBoxComponent
      id="comboelement"
      value={sportsDatas[0]}
      dataSource={sportsDatas}
      placeholder="Select a ProductId"
    />
  );
};

export default ProductIdCombo;
