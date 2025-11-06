import type { IAccount } from 'auth'
import CustomInputContainer from '../../components/CustomInput/container/CustomInputContainer'
import { AccountPage,   FormWrapper, Title } from './style/style'
import type { SetStateAction } from 'react';
import CustomButtonContainer from '../../components/common/CustomButton/container/CustomButtonContainer';

interface Props{
    data:IAccount;
    setState:React.Dispatch<SetStateAction<IAccount>>;
    handleSubmit:()=>void;
}


const Account = ({
    data,
    handleSubmit,
    setState,
}:Props) => {
    const inputArr=[
        {
            name:"email",
            type:"email",
            placeholder:"이메일을 입력해주세요",
            required:true,
            label:"이메일",
            value:data.email
        },
        {
            name:"nickName",
            type:"text",
            placeholder:"닉네임을 입력해주세요",
            required:true,
            label:"닉네임",
            value:data.nickName
        },
        {
            name:"password",
            type:"password",
            placeholder:"비밀번호를 입력해주세요",
            required:true,
            label:"비밀번호",
            value:data.password
        },
        {
            name:"passwordCheck",
            type:"password",
            placeholder:"비밀번호를 확인해주세요",
            required:true,
            label:"비밀번호 체크",
            value:data.passwordCheck
        }
    ]
  return (
    <AccountPage>
        <Title>회원가입</Title>
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
                text="회원가입"
                handleSubmit={handleSubmit}
            />
        </FormWrapper>
    </AccountPage>
  )
}

export default Account