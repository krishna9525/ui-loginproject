import React, { useState } from "react"
import "./Login.css"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    // *****************validation**************

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);


    const emailRegex = /^[a-zA-Z.`]+@+[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,5}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const [disabled, setDisabled] = useState("")




    const handleEmail = (e) => {
        let email = e.target.value;

        if (email.match(emailRegex)) {
            setEmailErr(false);
        } else {
            setEmailErr(true);
        }
        if (!email) {
            setEmailErr(false);
        }
        setEmail(email);
    };



    const handlePassword = (e) => {
        let password = e.target.value;
        if (password.match(passwordRegex)) {
            setPwdError(false);

        } else {
            setPwdError(true);
        }

        if (!password) {
            setPwdError(false);
        }
        setPassword(password);
    };



    const handleSubmit = (e) => {
        e.preventDefault();


        let email = e.target[0].value;
        if (!email.match(emailRegex)) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }


        let password = e.target[1].value;
        if (!password.match(passwordRegex)) {
            setPwdError(true);

        } else {
            setPwdError(false);
        }

        if (email && password) {
            let userd = {
                Email: email,
                password: password,
            }
            console.log(userd);
            setEmail("")
            setPassword("")
            toast.success("Login Successfully")

        }

    };

    return (
        <>

            <div className="center">
                <h2>Agent Login </h2>
                <div className="p_text">
                    <p>Hey,Enter Your details to get sign in to your account</p>
                </div>
                <form  onSubmit={handleSubmit} >

                    <div className="txt-filed">
                        <input type="text" value={email} name="email" placeholder="Enter Email..." onChange={handleEmail} />
                    </div>
                    <div className="fixed">
                        {emailErr ? (
                            <span className="validation">
                                Please Enter a Valid email !
                            </span>
                        ) : (
                            ""
                        )}


                    </div>

                    <div className="txt-file">
                        <input type={show ? "text" : "password"} value={password} name="password" onChange={handlePassword} placeholder="Password" />
                        <label onClick={handleShow}>{show ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}</label>
                    </div>
                    <div className="fixed">

                        {pwdError ? (
                            <span className="validation">
                                Please Enter a Valid password !
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="singin-trobule">
                        <p>Having Trouble in sign in?</p>
                    </div>

                    <div className="btn-submit">
                        <input type="submit" value="Sign in"  disabled={ email==="" || password.length < 9 || disabled ==="submit"}/>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login;