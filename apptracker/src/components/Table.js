import React from "react";
import Cell from "./Cell.js";
const Table = props => {
  console.log(props.data.companies[0], "custom");
  return (
    <div>
      <table>
        <tr>
          <th>Company</th>
          <th>Summary</th>
          <th>Position Name</th>
          <th>Date Applied</th>
          <th>Asked To Interview</th>
          <th>Offer Made</th>
        </tr>

        {props.data.companies.map(item => {
          return <Cell item={item} />;
        })}
      </table>
    </div>
  );
};

export default Table;

/*

     {props.data.companies.map(item => {
            return (
              <div>
                <td>{item.company_name}</td>
                <td>item.summary</td>
              </div>
            );
          })}

*/
