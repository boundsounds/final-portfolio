import React from 'react'
import Table from "react-bootstrap/Table"
export const CommissionsTable = () => {
    return (
      <div className="tableview">
        <Table striped bordered hover size="sm" >
          <thead>
            <tr>
              <th>TYPE OF WORK</th>
              <th>PRICING</th>
              <th>TIMEFRAME</th>
              <th>REVISIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ALBUM ART</td>
              <td>$50+</td>
              <td>2-4 DAYS</td>
              <td>3</td>
            </tr>
            <tr>
              <td>PROMO VIDEO</td>
              <td>$40+</td>
              <td>2-4 DAYS</td>
              <td>5</td>
            </tr>
            <tr>
              <td>MUSIC VIDEO</td>
              <td>$180+</td>
              <td>1-2 WEEKS</td>
              <td>4</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}
export default CommissionsTable
