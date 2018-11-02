import React from "react";
import "./OrderBookTable.css";

const OrderBookTable = ({ hideTable, dataOrder, dataOffer }) => {
  return (
    <div>
      {hideTable ? null : (
        <div>
          <br />
          <table className="table-offer">
            <tbody>
              <tr>
                <th>COUNT</th>
                <th>AMOUNT</th>
                <th>TOTAL</th>
                <th>PRICE</th>
              </tr>
              {dataOffer.map(d => (
                <tr key={d.price}>
                  <td>{d.count}</td>
                  <td>{d.amount}</td>
                  <td>{d.total}</td>
                  <td>{d.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table-order">
            <tbody>
              <tr >
                <th>PRICE</th>
                <th>TOTAL</th>
                <th>AMOUNT</th>
                <th>COUNT</th>
              </tr>
              {dataOrder.map(d => (
                <tr key={d.price}>
                  <td>{d.price}</td>
                  <td>{d.total}</td>
                  <td>{d.amount}</td>
                  <td>{d.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderBookTable;
