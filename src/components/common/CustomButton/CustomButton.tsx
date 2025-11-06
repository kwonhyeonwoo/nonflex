import React from 'react'
import { CustomBtn } from './style/style'

interface Props{
    text:string;
    onSubmit:()=>void;
}

const CustomButton = ({
    text,
    onSubmit
}:Props) => {
  return (
    <CustomBtn onClick={onSubmit}>{text}</CustomBtn>
  )
}

export default CustomButton