import { useCallback, type SetStateAction } from 'react'
import CustomInput from '../CustomInput'
import type { IAccount } from 'auth';
interface Props{
    name:string;
    type:string;
    placeholder:string;
    required:boolean;
    label:string;
    value:string;
    setState:React.Dispatch<SetStateAction<IAccount>>;
}
const CustomInputContainer = ({
    name,
    type,
    placeholder,
    required,
    value,
    label,
    setState,
}:Props) => {
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