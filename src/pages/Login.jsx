import { useState } from "react";
import Input from "../microcomponents/textField/Input";
import Button from "../microcomponents/button/Button";
import { OtpInputComponent } from "@syncfusion/ej2-react-inputs";
import { LoginFetching } from "../services/LoginFetching";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    smscode: "",
  });

  const handleInputValueChange = (e) => {
    const { value } = e.target;
    setUserInfo({
      ...userInfo,
      [e.target.name]: value,
    });
  };

  const valueChangeFuntion = (args) => {
    setUserInfo({ ...userInfo, smscode: args.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo) {
      LoginFetching(userInfo);
    }
  };

  return (
    <div className="flex items-center w-full h-screen justify-center">
      <div className="w-[500px] border border-gray-200 shadow-md rounded-xl p-8">
        <h4 className="text-lg font-medium text-slate-800">ورود کاربر</h4>
        <form className="flex flex-col gap-5">
          <Input
            placeholder="نام کاربری"
            name={"username"}
            onChange={handleInputValueChange}
            type={"text"}
          />
          <Input
            placeholder="رمز عبور"
            name={"password"}
            onChange={handleInputValueChange}
            type={"text"}
          />
          <div className="flex flex-col gap-1">
            <label className="text-right">کد ارسالی</label>
            <OtpInputComponent
              valueChanged={valueChangeFuntion}
              length={3}
            ></OtpInputComponent>
          </div>

          <Button
            className={"h-10 rounded-md"}
            cssClass={"e-success"}
            label={"ورود"}
            type={"submit"}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
