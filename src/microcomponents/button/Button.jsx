import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
// import { enableRipple } from "@syncfusion/ej2-base";

const Button = ({ type, cssClass, label, className, onClick }) => {
  return (
    <ButtonComponent
      className={className}
      onClick={onClick}
      type={type}
      cssClass={cssClass}
    >
      {label}
    </ButtonComponent>
  );
};

export default Button;
