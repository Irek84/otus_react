import React, { useState } from "react";
import axios from "axios";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(`post`).then((res) => {
      if (res.status === 200) {
        setIsLogin(true);
        setUserName(e.target.username.value);
      }
    });
  };

  return (
    <>
      {isLogin && <div>{userName}, добро пожаловать!</div>}
      {!isLogin && (
        <form onSubmit={onSubmit}>
          <label>
            Логин: <input type="text" name="username" />
          </label>
          <br />
          <label>
            Пароль: <input type="password" name="userpassword" />
          </label>
          <br />
          <input type="submit" value="Войти" />
        </form>
      )}
    </>
  );
}
export default AuthForm;
