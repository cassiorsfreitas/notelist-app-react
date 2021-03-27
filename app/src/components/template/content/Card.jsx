/* eslint-disable import/no-anonymous-default-export */
import './Card.css'
import React from 'react'
import { Card } from 'react-sensei'


export default (props) => {
    return (
      <div className="col-lg-8 offset-lg-2">
        <Card isPrimary>
          {props.title}
        </Card>
      </div>
    );
  }