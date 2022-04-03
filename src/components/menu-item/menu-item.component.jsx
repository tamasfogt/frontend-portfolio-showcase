import { Link } from "react-router-dom";

const MenuItem = ({ link, children }) => {
  return (
    <div className="inline mx-2 cursor-pointer">
      {link ? <Link to={link}>{children}</Link> : children}
    </div>
  );
};

export default MenuItem;
