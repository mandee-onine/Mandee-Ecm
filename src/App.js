import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from './components/Cart/Cart';
import Modal from "./components/Modal";
import ManageDetails from "./components/ManageDetails";
import Cancellations from "./components/OrderDetails/Cancellations";
import LiveOrders from "./components/OrderDetails/LiveOrders";
import PastOrders from "./components/OrderDetails/PastOrders";
import Returns from "./components/OrderDetails/Returns";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import CancelOrder from "./components/PlaceOrder/CancelOrder";
import Besan from "./components/BDcPsBrUdTd/Besan"
import DriedChickpeaseDal from "./components/BDcPsBrUdTd/DriedChickpeaseDal"
import BoiledRice from "./components/BDcPsBrUdTd/BoiledRice"
import PlainSugar from "./components/BDcPsBrUdTd/PlainSugar"
import ToorDal from "./components/BDcPsBrUdTd/ToorDal"
import UradDal from "./components/BDcPsBrUdTd/UradDal"
import SavedLists from "./components/SavedLists";
import Privacypolicy from "./components/Footer/Privacypolicy";
import Termsandcondition from "./components/Footer/Termsandcondition";
import WorkWithUS from "./components/Footer/WorkWithUS";
import RawRice from "./components/BDcPsBrUdTd/RawRice";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateList from "./components/CreateList";
import Navbar from "./components/Navbar";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/Cart" component={Cart} />
          <Route path="/ManageDetails" component={ManageDetails} />
          <Route path="/Cancellations" component={Cancellations} />
          <Route path="/LiveOrders" component={LiveOrders} />
          <Route path="/PastOrders" component={PastOrders} />
          <Route path="/Returns" component={Returns} />
          <Route path="/PlaceOrder" component={PlaceOrder} />
          <Route path="/CancelOrder" component={CancelOrder} />
          <Route path="/Besan" component={Besan} />
          <Route path="/BoiledRice" component={BoiledRice} />
          <Route path="/DriedChickpeaseDal" component={DriedChickpeaseDal} />
          <Route path="/PlainSugar" component={PlainSugar} />
          <Route path="/ToorDal" component={ToorDal} />
          <Route path="/CreateList" component={CreateList} />
          <Route path="/SavedLists" component={SavedLists} />
          <Route path="/Privacypolicy" component={Privacypolicy} />
          <Route path="/Termsandcondition" component={Termsandcondition} />
          <Route path="/WorkWithUS" component={WorkWithUS} />
          <Route path="/RawRice" component={RawRice} />
          {/*<Route path="/" component={} />
          <Route path="/" component={} /> */}

          <Route path="/UradDal" component={UradDal} />

          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
