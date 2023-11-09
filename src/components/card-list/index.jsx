import React from "react";
import { card } from "../card";
import "./style.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.robots.map((el) => (
      <div key={el.id}>{el.name}</div>
    ))}
  </div>
);
