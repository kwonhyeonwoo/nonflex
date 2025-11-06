import { useCallback, type SetStateAction } from 'react'
import CustomInput from '../CustomInput'
import type { IAccount, ILogin } from 'auth';
interface  Props<T>{
    name:string;
    type:string;
    placeholder:string;
    required:boolean;
    label:string;
    value:string;
    setState: React.Dispatch<SetStateAction<T>>;
}
const CustomInputContainer =<T extends IAccount | ILogin>({
  name,
  type,
  placeholder,
  required,
  value,
  label,
  setState,
}: Props<T>) => {
    const handleUpdateChange = useCallback(
      (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
          setState((prev)=>({
            ...prev,
            [name]:value,
          }))
      },
      [setState],
    );
    
  return (
    <CustomInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        label={label}
        onUpdateChange={handleUpdateChange}
    />
  )
}

export default CustomInputContainer