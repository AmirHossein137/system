import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { useState } from "react";
import BusinesCombo from "./BusinesCombo";
import ProductIdCombo from "./ProductIdCombo";
function ModalInfo() {
  const [visibility, setDialogVisibility] = useState(false);
  function onOverlayClick() {
    setDialogVisibility(false);
  }
  function dialogClose() {
    setDialogVisibility(false);
  }
  function handleClick() {
    setDialogVisibility(true);
  }
  return (
    <div id="dialog-target">
      <button
        className="e-control e-btn"
        id="targetButton1"
        role="button"
        onClick={handleClick}
      >
        {" "}
        باز کنید
      </button>
      <DialogComponent
        width="400px"
        isModal={true}
        target="#dialog-target"
        visible={visibility}
        close={dialogClose}
        overlayClick={onOverlayClick}
        minHeight={400}
        className="p-2"
      >
        <div className="flex flex-col gap-6">
          <BusinesCombo />
          <ProductIdCombo />
        </div>
      </DialogComponent>
    </div>
  );
}

export default ModalInfo;
