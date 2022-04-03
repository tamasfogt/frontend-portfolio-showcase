import { useSelector } from "react-redux";
import { selectToastList } from "../../redux/toaster/toaster.selector";
import ToasterItem from "../toaster-item/toaster-item.component";
const Toaster = () => {
  const toastList = useSelector(selectToastList);

  return (
    <div className="absolute right-0 mr-3">
      <div className="flex flex-col">
        {toastList.map((item) => {
          return <ToasterItem key={item.id} {...item}></ToasterItem>;
        })}
      </div>
    </div>
  );
};

export default Toaster;
