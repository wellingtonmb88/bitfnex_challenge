import React, { PureComponent } from "react";
import OrderBookHeader from "./OrderBookHeader/OrderBookHeader";
import OrderBookTable from "./OrderBookTable/OrderBookTable";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as OrderActions from "../store/actions/OrderActions";

import "./OrderBook.css";

const dataMock = [
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

class OrderBook extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hideTable: false
    };
  }

  componentDidMount() {
    this.props.requestOrderList();
  }

  render() {
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
          dataOffer={dataMock}
          dataOrder={dataMock}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderBook);
