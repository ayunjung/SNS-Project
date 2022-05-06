import React from 'react';
import { Link } from 'react-router-dom';

const Join = () => {

    return (
        <div className="signup-form">
            <div className="signup-title"><span>회원가입</span></div>
            <form name="signup" action="" method="post">
                <div className="id-text">
                    <label htmlFor="id-account">아이디</label><br/>
                    <div id="id-box">
                        <input id="id-account" type="text" name="id" required="required" placeholder="아이디" />
                        <input id="id-check" type="button" value="아이디 중복" />
                    </div>
                    <span id="account-alert" className="alert-message">ERROR</span>
                </div>
                <div className="id-text">
                    <label htmlFor="id-password">비밀번호</label><br/>
                    <input id="id-password" type="password" name="password" required="required" placeholder="비밀번호" />
                    <span id="account-alert" className="alert-message">ERROR</span>
                </div>
                <div className="id-text">
                    <label htmlFor="id-password2">비밀번호 확인</label><br/>
                    <input id="id-password2" type="password" name="password2" required="required" placeholder="비밀번호 확인" />
                    <span id="account-alert" className="alert-message">ERROR</span>
                </div>
                <div className="id-text">
                    <label htmlFor="id-name">이름</label><br/>
                    <input id="id-name" type="text" name="name" required="required" placeholder="이름" />
                    <span id="account-alert" className="alert-message">ERROR</span>
                </div>
                <div className="id-text">
                    <label htmlFor="id-birth">생년월일</label><br/>
                    <input id="id-birth" type="date" name="birth" required="required" />
                    <span id="account-alert" className="alert-message">ERROR</span>
                </div>
                <div className="gender">
                    <label>성별</label>
                    <input type="radio" name="gender" id="id-gender-male" required="required" defaultChecked/>
                    <label htmlFor="id-gender-male">남</label>
                    <input type="radio" name="gender" id="id-gender-female" required="required" />
                    <label htmlFor="id-gender-female">여</label>
                    <span id="account-alert" className="alert-message">ERROR</span>
                </div>
                <div className="join-btnbox">
                    <button id="signup" type="submit" name="button">가입하기</button>
                    <div id="join-cancel"><Link to="./LoginPage">취소</Link></div>
                </div>
            </form>
        </div>
    )
}

export default Join