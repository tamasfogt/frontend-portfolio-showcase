import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as CaretSvg } from "../../assets/caret.svg";

import LotList from "../lot-list/lot-list.component";
import { selectStockItemBySymbol } from "../../redux/stocks/stocks.selector";
import { deleteStockStart } from "../../redux/stocks/stocks-saga.actions";

const StockItem = ({ symbol }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const stockItem = useSelector(selectStockItemBySymbol(symbol));

  const innerStockItem = (
    <div className="mt-3 border-t border-gray-200">
      <div>Név: {stockItem?.name}</div>
      <div>
        <button
          onClick={() => dispatch(deleteStockStart(stockItem._id))}
          type="button"
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
        >
          Delete
        </button>
      </div>
      <div> notes</div>
      <LotList symbol={symbol}></LotList>
    </div>
  );
  return (
    <div className=" shadow-lg p-2 bg-white my-2">
      <div
        className="font-semibold  flex justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div>
          {symbol} Quantity:{stockItem?.quantity} {open}
        </div>
        <div>
          <CaretSvg
            height="20"
            className={`text-xl ${open ? "rotate-180" : ""}`}
          ></CaretSvg>
        </div>
      </div>
      {open ? innerStockItem : <></>}
    </div>
  );
};

export default StockItem;
