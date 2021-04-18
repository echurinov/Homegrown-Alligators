import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./loginForm.css"
const eye = <FontAwesomeIcon icon={faEye} />;

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password:""});
    const [passwordShown, setPasswordShown] = useState(false);

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className="login-form">
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Admin Login</h2>
                    {(error != "") ? ( <div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type={passwordShown ? "text" : "password"} name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                        <i onClick={togglePasswordVisibility}>{eye}</i>
                    </div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>

    )
}

export default LoginForm
