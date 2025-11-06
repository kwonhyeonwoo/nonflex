import { CustomInputBox, CustomInputLine, CustomLabel } from './style/style'

interface Props{
    name:string;
    type:string;
    placeholder:string;
    value:string;
    required:boolean;
    label:string;
    onUpdateChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;

}

const CustomInput = ({
    name,
    type,
    placeholder,
    required,
    value,
    label,
    onUpdateChange
}:Props) => {
  return (
    <CustomInputBox>
        <CustomLabel>{label}</CustomLabel>
            <CustomInputLine
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={onUpdateChange}
            />
    </CustomInputBox>
  )
}

export default CustomInput