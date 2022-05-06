import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="login-form">
            <form action='' method='Post'>
                <input type="text" className="login-text" name="id" placeholder="아이디" required="required" />
                <input type="password" className="login-text" name="password" placeholder="비밀번호" required="required" />
                <button id="login" type="submit" name="login">로그인</button>
            </form>
            <div className="login-signup">
                <Link to="./JoinPage" style={{ fontSize: '15px', color: '#595959' }}><span>회원가입</span></Link>
                <Link to="./MainPage" style={{ fontSize: '15px', color: '#595959' }}><span>회원가입</span></Link>
            </div>
        </div>
    )
}

export default Login