import React, { useContext, useState } from "react";
// import { GoogleLogin } from "react-google-login";
import { useNavigate } from 'react-router-dom'
import AuthContext from "../Context/AuthContext";
import FrontImg from '../images/frontImg.jpg'
import BackImg from '../images/backImg.jpg'
import "../styles/Auth.css"
function Auth() {
    const navigate = useNavigate();
    // const { signUp, googleSignIn, signIn } = useContext(AuthContext)

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    const [ loginError , setLoginError ] = useState('');
    const [ registerError , setRegisterError ] = useState('');

    // const Login = async (e) => {
    //     try {
    //         await signIn(loginEmail, loginPassword)
    //         navigate('/')
    //     } catch (err) {
    //         setLoginError(err);
    //         console.log(err.message)
    //         handleError();
    //     }
    // }
    // const Register = async (e) => {
    //     try {
    //         await signUp(registerEmail, registerPassword)
    //         navigate('/')
    //     } catch (err) {
    //         setRegisterError(err);
    //         console.log(err.message)
    //         handleError();
    //     }
    // }

    // const handleGoogle = async () => {
    //     try {
    //         await googleSignIn();
    //         navigate('/');
    //     } catch (err) {
    //         setLoginError(err)
    //         setRegisterError(err)
    //         handleError();
    //     }
    // }

    // const handleError = () => {
    //     setTimeout(() => {
    //         setLoginError('')
    //         setRegisterError('')
    //     }, 5000);
    // }

    const gotoForgotPassword = () => {
        navigate('/forgotpassword');
    }
    const handleGoogle = () => {

    }
    const Login = () => {

    }
    const Register  = () => {

    }
    return (
        <React.Fragment>
            <section className="fold">
                <div className="container-login">
                    <input type="checkbox" id="flip" />
                    <div className="cover">
                        <div className="front">
                            <img src={FrontImg} alt="" />
                            <div className="text">
                                <span className="text-1">It takes months<br /> to find a Customr...<br />Seconds to lose one..,</span>
                                <span className="text-2">Let's get connected</span>
                            </div>
                        </div>
                        <div className="back">
                            <img className="backImg" src={BackImg} alt="" />
                            <div className="text">
                                <span className="text-1">Our Services are never before...<br />ever after</span>
                                <span className="text-2">Let's get started</span>
                            </div>
                        </div>
                    </div>
                    <div className="forms">
                        <div className="form-content">
                            <div className="login-form">
                                <div className="title">LOGIN</div>
                                <form action="#">
                                    <div className="input-boxes">
                                        <small className="errorText">{loginError ? loginError.message : ''}</small>
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter your email" onChange={(e)=>setLoginEmail(e.target.value)} required={true} />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter your password" onChange={(e)=>setLoginPassword(e.target.value)} required={true} />
                                        </div>
                                        <div className="text"><a onClick={gotoForgotPassword} >Forgot password?</a></div>
                                        <div className="button input-box">
                                            <input type="submit" value="Sumbit" onClick={Login} />
                                        </div>
                                        <div className="socialBox">
                                        <GoogleLogin
                                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />,
                                            {/* <button className="social" onClick={handleGoogle}> <i className="fas fa-lock"></i> Google</button> */}
                                            {/* <button className="social">  <i className="fas fa-lock"></i> Facebook</button> */}
                                        </div>
                                        

                                        <div className="text sign-up-text">Don't have an account?<br /> <label htmlFor="flip">SIGN UP NOW</label></div>
                                    </div>
                                </form>
                            </div>
                            <div className="signup-form">
                                <div className="title">SIGN UP</div>
                                <form action="#">
                                    <div className="input-boxes">
                                        <small className="errorText">{registerError ? registerError.message : ''}</small>
                                        <div className="input-box">
                                            <i className="fas fa-user"></i>
                                            <input type="text" placeholder="Enter your name" required={true} />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter your email" onChange={(e)=>setRegisterEmail(e.target.value)} required={true} />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter your password" onChange={(e)=>setRegisterPassword(e.target.value)} required={true} />
                                        </div>
                                        <div className="button input-box">
                                            <input type="submit" value="Sumbit" onClick={Register} />
                                        </div>
                                        <div className="socialBox">
                                        <GoogleLogin
                                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />,
                                            {/* <button className="social" onClick={handleGoogle}> <i className="fas fa-lock"></i> Google</button>
                                            <button className="social">  <i className="fas fa-lock"></i> Facebook</button> */}
                                        </div>
                                        <div className="text sign-up-text">Already have an account?<br /> <label htmlFor="flip">LOGIN NOW</label></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Auth