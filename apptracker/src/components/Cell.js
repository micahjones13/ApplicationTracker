import React from "react";
import axios from "axios";
const Cell = props => {
  return (
    <tr>
      <td>{props.item.id}</td>
      <td>{props.item.company_name}</td>
      <td>{props.item.summary}</td>
      <td>{props.item.position_name}</td>
      <td>{props.item.date_applied}</td>
      <td>{props.item.asked_to_interview ? "Yes" : "No"}</td>
      <td>{props.item.offer_made ? "Yes" : "No"}</td>
      <button onClick={() => props.remove(props.item.id)}>Delete</button>
    </tr>
  );
};

export default Cell;
// onClick={() => props.history.push(`http://localhost:3000/companies/{props.item.id}`)}
