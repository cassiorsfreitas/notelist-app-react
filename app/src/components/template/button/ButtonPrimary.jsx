/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { CleanButton } from "react-sensei";



const button = (props) => {
  const {text, onClick} = props
  
  return (
      <CleanButton isPrimary onClick={onClick}>{text}</CleanButton>
    )
  }

export default button