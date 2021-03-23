/* eslint-disable import/no-anonymous-default-export */
import './StatusCard.css'
import React from "react";
import { StatIconCard } from "react-sensei";

const statCard = props => {
  return (
    <div className="status-card">
      <StatIconCard label={props.title} value={props.value} icon="list-ui-alt" />
    </div>
  );
};

export default statCard
