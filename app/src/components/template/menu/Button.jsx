/* eslint-disable import/no-anonymous-default-export */
import './Button.css'
import React from "react"

import { CleanButton } from "react-sensei"


const button = props =>
    <div className="buttonPrimary">
          <CleanButton isPrimary>{props.text}</CleanButton>
    </div>

export default button