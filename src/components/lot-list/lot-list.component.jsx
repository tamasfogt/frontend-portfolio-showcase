import { useSelector } from "react-redux";
import LotItem from "../lot-item/lot-item.component";

import { selectLotsBySymbol } from "../../redux/stocks/stocks.selector";
const LotList = ({ symbol }) => {
  const lots = useSelector(selectLotsBySymbol(symbol));
  return (
    <div>
      <div>
        <button className="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          Add lot
        </button>
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th>price</th>
              <th>quantity</th>
              <th>cost</th>
              <th>notes</th>
              <th>edit and delete</th>
            </tr>
          </thead>
          <tbody>
            {lots?.map((lot) => (
              <LotItem {...lot}></LotItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LotList;
