/* eslint-disable import/no-anonymous-default-export */
import './Card.css'
import React from 'react'
import { Card } from "react-sensei"


export default () => {
    return (
      <div className="col-lg-8 offset-lg-2">
        <Card isAccent noBottomMargin>
          I'm a simple accent card
        </Card>
      </div>
    );
  }