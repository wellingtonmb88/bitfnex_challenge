import React, { PureComponent } from "react";
import OrderBookHeader from "./OrderBookHeader/OrderBookHeader";
import OrderBookTable from "./OrderBookTable/OrderBookTable";

import "./OrderBook.css";

class OrderBook extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hideTable: false
    };
  }

  render() {
    const data = [
      {
        count: 3,
        amount: 3.03,
        total: 10.03,
        price: 6428.2
      },
      {
        count: 1,
        amount: 4.03,
        total: 9.03,
        price: 222.2
      },
      {
        count: 9,
        amount: 55.03,
        total: 22.03,
        price: 333.2
      }
    ];

    return (
      <div className="table-book">
        <OrderBookHeader
          hideTable={this.state.hideTable}
          onHeaderClicked={() => {
            this.setState({ hideTable: !this.state.hideTable });
          }}
          onAddClicked={() => {
            alert("Add");
          }}
          onMinusClicked={() => {
            alert("Minimize");
          }}
        />
        <OrderBookTable
          hideTable={this.state.hideTable}
          dataOffer={data}
          dataOrder={data}
        />
      </div>
    );
  }
}

export default OrderBook;
