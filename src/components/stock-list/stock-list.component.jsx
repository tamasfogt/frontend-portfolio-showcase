import { useSelector } from "react-redux";
import StockItem from "../stock-item/stock-item.component";
import { selectStockList } from "../../redux/stocks/stocks.selector";
const StockList = () => {
  const stockList = useSelector(selectStockList);

  return (
    <div>
      <div>
        {stockList.map((item) => {
          return <StockItem key={item.id} {...item}></StockItem>;
        })}
      </div>
    </div>
  );
};

export default StockList;
