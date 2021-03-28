/* eslint-disable import/no-anonymous-default-export */
import './Card.css'
import React from 'react'
import { Card } from 'react-sensei'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


export default (props) => {
    return (
      <div className="card">
        <Card isPrimary className="simple-card">
          {props.title}
          <div className="options">
            <div className="view-more">
              <FontAwesomeIcon icon={faEye} />
            </div>
          </div>
        </Card>
      </div>
    );
  }