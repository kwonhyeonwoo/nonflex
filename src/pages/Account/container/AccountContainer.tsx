import  { useCallback, useState } from 'react'
import Account from '../Account'
import type { IAccount } from 'auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authServie } from '../../../firebase';

const AccountContainer = () => {
    const [account, setAccount] = useState<IAccount>({
        email:"",
        password:"",
        passwordCheck:""
    });

    const handleSubmit = useCallback(
      async() => {
        const {
            email,
            password,
            passwordCheck
        } = account;

        if(password !== passwordCheck){
            console.log('비밀번호가 올바르지 않습니다.')
        }
        return await createUserWithEmailAndPassword(authServie,email,password);
    },
      [account],
    );
  return (
    <Account
        data={account}
        handleSubmit={handleSubmit}
        setState={setAccount}
    />
  )
}

export default AccountContainer