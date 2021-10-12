import React, {useEffect} from 'react';
import LoginView from "../view/LoginView";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const LoginPage = (props) => {

    let history = useHistory();

    useEffect(() => {
        if (props.userLogin !== null && props.userLogin !== undefined && props.userLogin.trim() !== '') {
            history.push("/index.html")
        }
    }, [history, props.userLogin]);


    const fnSubmitLogin = (data) => {
        if (props.fnSetLogin(data.signinUsername, data.signinPassword)) {
            console.log("Đăng nhập thành công")
        } else {
            console.log('Đăng nhập thất bại')
        }
    }

    return (
        <>
            <LoginView
                fnSubmitLogin={fnSubmitLogin}
            />
        </>
    )
}

export default LoginPage