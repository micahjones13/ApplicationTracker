import React from "react";

const Cell = props => {
  return (
    <tr>
      <td>{props.item.company_name}</td>
      <td>{props.item.summary}</td>
      <td>{props.item.position_name}</td>
      <td>{props.item.date_applied}</td>
      <td>{props.item.asked_to_interview ? "Yes" : "No"}</td>
      <td>{props.item.offer_made ? "Yes" : "No"}</td>
    </tr>
  );
};

export default Cell;
