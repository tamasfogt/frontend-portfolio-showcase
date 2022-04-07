import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StockItem from "../stock-item/stock-item.component";
import { selectStockList } from "../../redux/stocks/stocks.selector";

import AddStockModal from "../modals/add-stock-modal/add-stock-modal.component";

import { fetchStocksStart } from "../../redux/stocks/stocks.slice";

const StockList = () => {
  const dispatch = useDispatch();

  const [showAddStock, setShowAddStock] = useState(false); // ha így csinálom hogyan kezeljem a hibákat akkor zárom be ha minden jó.. ??

  const stockList = useSelector(selectStockList);
  useEffect(() => {
    dispatch(fetchStocksStart());
  }, []);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setShowAddStock(true);
          }}
          className="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Stock
        </button>
        {stockList?.map((item) => {
          return <StockItem key={item.symbol} {...item}></StockItem>;
        })}
        {showAddStock ? (
          <AddStockModal
            onCloseButtonClick={() => {
              setShowAddStock(false);
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default StockList;
