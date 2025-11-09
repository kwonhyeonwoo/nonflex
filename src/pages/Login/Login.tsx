import React, { type SetStateAction } from 'react'
import { FormWrapper, LoginPage, Title } from './css/style'
import type { ILogin } from 'auth'
import CustomInputContainer from '../../components/CustomInput/container/CustomInputContainer';
import CustomButtonContainer from '../../components/common/CustomButton/container/CustomButtonContainer';
import ExistAuth from '../../components/common/ExistAuth/ExistAuth';

interface Props{
  login:ILogin;
  setState:React.Dispatch<SetStateAction<ILogin>>
  handleLoginSubmit:()=>void;
}

const Login = ({login,setState,handleLoginSubmit}:Props) => {
  const inputArr=[
    {
      name:"email",
      type:"email",
      placeholder:"이메일을 입력해주세여",
      required:true,
      label:"이메일",
      value:login.email
    },
    {
      name:"password",
      type:"password",
      placeholder:"비밀번호를 입력해주세여",
      required:true,
      label:"비밀번호",
      value:login.password
    }
  ]
  return (
    <LoginPage >
      <Title>로그인</Title>
      <FormWrapper>
            {
                inputArr.map(({
                    name,
                    type,
                    placeholder,
                    required,
                    label,
                    value,
                },idx)=>(
                    <CustomInputContainer
                        name={name}
                        type={type}
                        setState={setState}
                        placeholder={placeholder}
                        required={required}
                        value={value}
                        label={label}
                        key={idx}
                    />
                ))
            }
            <CustomButtonContainer
                text="로그인"
                handleSubmit={handleLoginSubmit}
            />
        </FormWrapper>
        <ExistAuth text='계정이 없으신가요?' link='/auth/account'/>
    </LoginPage>
  )
}

export default Login