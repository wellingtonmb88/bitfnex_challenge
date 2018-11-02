import React from "react";
import { ChevronRight, Add, Minimize } from "@material-ui/icons";

import "./OrderBookHeader.css";

const OrderBookHeader = ({
  hideTable,
  onHeaderClicked,
  onAddClicked,
  onMinusClicked
}) => {
  return (
    <div className="header-table-book">
      <div className="header-title" onClick={onHeaderClicked}>
        <ChevronRight
          className={hideTable ? "chevron-right" : "chevron-more"}
        />
        <span className="title">ORDER BOOK</span>
        <span className="crypto-label">{`BTC/USD`}</span>
      </div>
      <div className="cmmands">
        <div
          className={hideTable ? "tooltip-hide" : "tooltip"}
          onClick={onAddClicked}
        >
          <Add className="add" />
          <span className="tooltiptext">Increase Precision</span>
        </div>
        <div
          className={hideTable ? "tooltip-hide" : "tooltip"}
          onClick={onMinusClicked}
        >
          <Minimize className="minimize" />
          <span className="tooltiptext">Decrease Precision</span>
        </div>
      </div>
    </div>
  );
};

export default OrderBookHeader;
