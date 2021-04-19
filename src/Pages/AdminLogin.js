import react, { useState } from "react";
import LoginForm from "../components/admin/loginForm";
import AdminTools from "../components/admin/adminTools";
import "./AdminLogin.css";

function AdminLogin() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Email or password is incorrect");
      setError("Email or password is incorrect");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="admin">
      {user.email != "" ? (
        <div className="welcome">
          <h2>Welcome</h2>
          <button onClick={Logout}>Logout</button>
          <AdminTools/>
        </div>
      ) : (
        <div className="login-form">
          <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  );
}

export default AdminLogin;
