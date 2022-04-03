import { useEffect } from "react";
import { useDispatch } from "react-redux";

import StockList from "../../components/stock-list/stock-list.component";

const HomePage = () => {
  return (
    <div>
      <div className="my-3 text-3xl text-center">Portfolio page</div>
      <StockList></StockList>
    </div>
  );
};

export default HomePage;
