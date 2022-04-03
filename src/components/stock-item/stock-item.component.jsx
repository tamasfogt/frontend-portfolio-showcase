import { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as CaretSvg } from "../../assets/caret.svg";

import LotList from "../lot-list/lot-list.component";

const StockItem = ({ symbol, quantity }) => {
  const [open, setOpen] = useState(false);

  const innerStockItem = (
    <div className="mt-3 border-t border-gray-200">
      notes
      <LotList></LotList>
    </div>
  );
  return (
    <div className=" shadow-lg p-2 bg-white my-2">
      <div
        className="font-semibold  flex justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div>
          {symbol} Quantity:{quantity} {open}
        </div>
        <div>
          <CaretSvg
            className={`text-xl ${open ? "rotate-180" : ""}`}
          ></CaretSvg>
        </div>
      </div>
      {open ? innerStockItem : <></>}
    </div>
  );
};

export default StockItem;
