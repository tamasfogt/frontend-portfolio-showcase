import { useEffect } from "react";
import { useDispatch } from "react-redux";

// TODO ez egy inline elem lesz amit be tud szúrni illetve tud szerkeszteni
const LotItem = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>price</div>
        <div>quantity</div>
        <div>cost</div>
        <div>notes</div>
        <div>edit and delete</div>
      </div>
    </div>
  );
};

export default LotItem;
