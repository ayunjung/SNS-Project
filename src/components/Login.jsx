import React from 'react';

const Login = () => {

    return (
        <div class="login-form">
            <form action="../pages/MainPage" method="post">
                <input type="text" class="login-text" name="id" placeholder="아이디" required="required" />
                <input type="password" class="login-text" name="password" placeholder="비밀번호" required="required" />
                <button id="login" type="submit" name="login">로그인</button>
            </form>
            <div class="login-signup">
                <a href="../pages/JoinPage"><span>회원가입</span></a>
            </div>
        </div>
    )
}

export default Login