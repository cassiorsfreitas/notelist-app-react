
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { CleanButton } from "react-sensei";


const button = (props) => {
    return (
      <CleanButton isAccent>{props.text}</CleanButton>
    )
  }

export default button