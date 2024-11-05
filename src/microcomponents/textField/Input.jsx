import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";

const Input = ({ id, name, value, onChange, placeholder, type }) => {
  return (
    <TextBoxComponent
      className="text-right"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      floatLabelType="Auto"
      value={value}
      onChange={onChange}
      cssClass="e-bigger"
    />
  );
};

export default Input;
