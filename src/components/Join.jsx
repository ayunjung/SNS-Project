import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Join = () => {

    let history = useHistory();

    //이메일, 비밀번호, 비밀번호 확인, 생년월일, 직업, 한줄소개
    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordConfirm, setPasswordConfirm] = useState("");
    const [Name, setName] = useState("");
    const [Birth, setBirth] = useState("");
    const [Gender, setGender] = useState("");

    //오류메시지 상태저장
    const [IDMessage, setIDMessage] = useState('')
    const [PasswordMessage, setPasswordMessage] = useState('')
    const [PasswordConfirmMessage, setPasswordConfirmMessage] = useState('')

    // 유효성 검사
    const [isID, setIsID] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

    const onNameHandler = (e) => {
        setName(e.target.value)
    }
    const onBirthHandler = (e) => {
        setBirth(e.target.value)
    }
    const onGenderHandler = (e) => {
        setGender(e.target.value)
    }


    // 이메일
    const onChangeID = useCallback((e) => {
        const idRegex =	/^[a-zA-Z][a-zA-Z0-9_-]{6,12}$/
        const idCurrent = e.target.value
        setID(idCurrent)

        if (!idRegex.test(idCurrent)) {
        setIDMessage('6~12자 이상의 영문자+숫자 조합으로 입력하십시오.')
        setIsID(false)
        } else {
        setIDMessage('사용 가능한 아이디입니다.')
        setIsID(true)
        }
    }, [])

    // 비밀번호
    const onChangePassword = useCallback((e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)

        if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage('8자 이상의 영문자+숫자+특수문자 조합으로 입력하십시오.')
        setIsPassword(false)
        } else {
        setPasswordMessage('안전한 비밀번호입니다.')
        setIsPassword(true)
        }
    }, [])

    // 비밀번호 확인
    const onChangePasswordConfirm = useCallback((e) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)

        if (Password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('비밀번호를 똑같이 입력했습니다.')
            setIsPasswordConfirm(true)
        } else {
            setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.')
            setIsPasswordConfirm(false)
        }
        },
        [Password]
    )

    return (
        <div className="signup-form">
            <div className="signup-title"><span>회원가입</span></div>
            <form name="signup" action="" method="post">
                <div className="id-text">
                    <label htmlFor="id-account">아이디</label><br/>
                    <div id="id-box">
                        <input id="id-account" type="text" name="id" required="required" placeholder="아이디" value={ID} onChange={onChangeID} />
                        <input id="id-check" type="button" value="아이디 중복" />
                    </div>
                    {ID.length > 0 && <div className={`${isID ? 'success' : 'error'}`}>{IDMessage}</div>}
                </div>
                <div className="id-text">
                    <label htmlFor="id-password">비밀번호</label><br/>
                    <input id="id-password" type="password" name="password" required="required" placeholder="비밀번호" value={Password} onChange={onChangePassword} />
                    {Password.length > 0 && <div className={`${isPassword ? 'success' : 'error'}`}>{PasswordMessage}</div>}
                </div>
                <div className="id-text">
                    <label htmlFor="id-password2">비밀번호 확인</label><br/>
                    <input id="id-password2" type="password" name="password2" required="required" placeholder="비밀번호 확인" value={PasswordConfirm} onChange={onChangePasswordConfirm} />
                    {PasswordConfirm.length > 0 && <div className={`${isPasswordConfirm ? 'success' : 'error'}`}>{PasswordConfirmMessage}</div>}
                </div>
                <div className="id-text">
                    <label htmlFor="id-name">이름</label><br/>
                    <input id="id-name" type="text" name="name" required="required" placeholder="이름" />
                </div>
                <div className="id-text">
                    <label htmlFor="id-birth">생년월일</label><br/>
                    <input id="id-birth" type="date" name="birth" required="required" />
                </div>
                <div className="gender">
                    <label>성별</label>
                    <input type="radio" name="gender" id="id-gender-male" required="required" defaultChecked/>
                    <label htmlFor="id-gender-male">남</label>
                    <input type="radio" name="gender" id="id-gender-female" required="required" />
                    <label htmlFor="id-gender-female">여</label>
                </div>
                <div className="join-btnbox">
                    <button id="signup" type="submit" name="button">가입하기</button>
                    <div id="join-cancel" onClick={()=>{ history.goBack() }}>취소</div>
                </div>
            </form>
        </div>
    )
}

export default Join