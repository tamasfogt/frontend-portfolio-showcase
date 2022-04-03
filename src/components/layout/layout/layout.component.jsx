import React from "react";
import Footer from "../footer/footer.component";
import HeaderComponent from "../header/header.component";

class Layout extends React.Component {
  render() {
    return (
      <div className="bg-gray-100">
        <HeaderComponent></HeaderComponent>
        <main className="max-w-7xl mx-auto px-2">{this.props.children}</main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Layout;
