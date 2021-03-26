/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { CleanButton } from "react-sensei";


const button = (props) => {
    return (
      <CleanButton isPrimary>{props.text}</CleanButton>
    )
  }

export default button