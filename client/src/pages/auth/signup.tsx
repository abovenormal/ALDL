import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Head from 'next/head';
import FormInput from '../../components/common/FormInput';
import Button from '../../components/common/Button';
import { signup } from '../../api/auth';
import Link from 'next/link';

async function createUser(
  email: string,
  password: string,
  name: string,
  nickname: string
): Promise<any> {
  const response = signup({ email, password, name, nickname });
}

const Signup: NextPage = ({}) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const nicknameInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [repasswordInputValue, setRepasswordInputValue] = useState('');
  const [nameInputValue, setNameInputValue] = useState('');
  const [nicknameInputValue, setNicknameInputValue] = useState('');

  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value || '';
    const enteredPassword = passwordInputRef.current?.value || '';
    const enteredName = nameInputRef.current?.value || '';
    const enteredNickname = nicknameInputRef.current?.value || '';

    try {
      const response = await createUser(
        enteredEmail,
        enteredPassword,
        enteredName,
        enteredNickname
      );
      router.replace('/auth/login');
    } catch (error) {
      console.log(error);
    }
  }

  if (status === 'authenticated') {
    router.replace('/');
    return (
      <div>
        <h1>회원가입</h1>
        <div>이미 가입된 회원입니다.</div>
        <div>메인 페이지로 이동합니다.</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>회원가입</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main>
        <div className="text-center font-custom font-bold text-lg text-black mb-12">
          회원가입
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center"
        >
          {/* todo: 이메일 인증 */}
          <FormInput
            label="이메일"
            id="email"
            isError
            errMsg="* 올바른 이메일 형식을 확인하세요."
            value={emailInputValue}
            onChange={(e) => {
              setEmailInputValue(e.target.value);
            }}
            ref={emailInputRef}
          ></FormInput>
          <FormInput
            label="비밀번호"
            id="password"
            type="password"
            value={passwordInputValue}
            onChange={(e) => {
              setPasswordInputValue(e.target.value);
            }}
            ref={passwordInputRef}
          ></FormInput>
          <FormInput
            label="비밀번호 확인"
            id="passwordConfirm"
            type="password"
            isError
            errMsg="* 비밀번호를 다시 확인해주세요."
            value={repasswordInputValue}
            onChange={(e) => {
              setRepasswordInputValue(e.target.value);
            }}
          ></FormInput>
          <FormInput
            label="이름"
            id="name"
            value={nameInputValue}
            onChange={(e) => {
              setNameInputValue(e.target.value);
            }}
            ref={nameInputRef}
          ></FormInput>
          <FormInput
            label="닉네임"
            id="nickname"
            isError
            errMsg="* 중복된 닉네임입니다."
            value={nicknameInputValue}
            onChange={(e) => {
              setNicknameInputValue(e.target.value);
            }}
            ref={nicknameInputRef}
          ></FormInput>
          <div className="flex justify-center content-center">
            <Link href="/">
              <Button
                label="취소"
                btnType="normal"
                btnSize="medium"
                type="button"
              ></Button>
            </Link>

            <Button
              label="확인"
              btnType="active"
              btnSize="medium"
              type="submit"
            ></Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Signup;
