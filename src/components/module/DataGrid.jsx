import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import { Edit, Inject, Toolbar } from "@syncfusion/ej2-react-grids";
import { useSelector } from "react-redux";
function DataGrid() {
  const DGrid = useSelector((state) => state.data.data);
  console.log(DGrid);
  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    showConfirmDialog: false,
    mode: "Dialog",
  };
  const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel"];

  function DataGrids() {
    const items = DGrid?.dataList.map((item) => ({
      businesstimingid: item.businesstimingid,
      coefficientofturnover: item.coefficientofturnover,
      currencyid: item.currencyid,
      id: item.id,
      daycoverage: item.daycoverage,
      inflation: item.inflation,
      localorforeigncurrency: item.localorforeigncurrency,
      name: item.name,
      productid: item.productid,
    }));
    return items;
  }


  const pageSettings = { pageSize: DGrid?.pageSize };
  return (
    <GridComponent
      dataSource={DataGrids()}
      allowPaging={true}
      pageSettings={pageSettings}
      editSettings={editOptions}
      toolbar={toolbarOptions}
    >
      <ColumnsDirective>
        {DGrid?.columnHeader?.map((item, index) => (
          <ColumnDirective
            key={index}
            field={item.field}
            width={item.width}
            textAlign={item.textAlign}
            editType={item.editType}
          />
        ))}
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent>
  );
}
export default DataGrid;
