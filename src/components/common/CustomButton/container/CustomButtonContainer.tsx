import { useCallback } from "react";
import CustomButton from "../CustomButton";

interface Props{
    text:string;
    handleSubmit:()=>void;
}

const CustomButtonContainer = ({
    text,
    handleSubmit
}:Props) => {
    const onSubmit = useCallback(
      () => {
        if(handleSubmit){
            handleSubmit();
        }
      },
      [handleSubmit],
    )
    
  return (
    <CustomButton
        text={text}
        onSubmit={onSubmit}
    />
  )
}

export default CustomButtonContainer