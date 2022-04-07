import { useEffect } from "react";
import { useDispatch } from "react-redux";

// TODO ez egy inline elem lesz amit be tud szúrni illetve tud szerkeszteni + lehet ide is kellene egy selector ..
// lehet nem is így lesz megcsinmálva..
const LotItem = () => {
  return (
    <tr>
      <td>price</td>
      <td>quantity</td>
      <td>cost</td>
      <td>notes</td>
      <td>edit and delete</td>
    </tr>
  );
};

export default LotItem;
