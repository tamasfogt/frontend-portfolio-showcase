import { useSelector } from "react-redux";
import LotItem from "../lot-item/lot-item.compoent";

const LotList = () => {
  return (
    <div>
      <div>
        <LotItem></LotItem>
        <LotItem></LotItem>
        <LotItem></LotItem>
      </div>
    </div>
  );
};

export default LotList;
