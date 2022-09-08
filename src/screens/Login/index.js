import React, { useState } from "react";
import PeopleImg from "../../assets/PeopleImg.jpeg";
import LoginImg from "../../assets/LoginImg.jpeg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useSelector((state) => state?.theme);

  const onEmailChange = (val) => {
    setEmail(val);
  };

  const onPasswordChange = (val) => {
    setPassword(val);
  };

  const onSubmit = () => {
    console.log("On Submit clicked");
  };

  const onForgotPassword = () => {
    console.log("On Forgot password clicked");
  };
  console.log(theme);

  return (
    <div className={`flex`}>
      <div
        className={`transition duration-500 flex flex-col h-screen	w-2/5 items-center px-16 ${
          theme === "light" ? "bg-white" : "bg-dark text-white"
        }`}
      >
        <img src={LoginImg} className={`w-28 my-20`} />
        <h1 className={`text-4xl mb-16`}>Log In</h1>
        <Input
          type={"text"}
          header={"Email"}
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          theme={theme}
        />
        <Input
          type={"password"}
          header={"Password"}
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          theme={theme}
        />
        <span
          className={`w-11/12 text-end mb-4 cursor-pointer`}
          onClick={onForgotPassword}
        >
          Forgot Password?
        </span>
        <Button text={"Login"} onClick={onSubmit} />
      </div>
      <img className={`h-screen w-3/5`} src={PeopleImg} />
    </div>
  );
};

export default Login;
