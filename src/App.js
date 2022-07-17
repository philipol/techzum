import "./App.css";
import { Route } from "react-router-dom";
import Index from "./Pages/Index";
import Services from "./Pages/Services";
import Admin from "./Admin/Pages/Admin";
import GetData from "./Admin/Pages/GetData";
import CurrentData from "./Admin/Pages/CurrentData";
import OrderData from "./Admin/Pages/OrderData";
import SendEmail from "./Admin/Pages/SendEmail";
import Kommun from "./Admin/Pages/Kommun";
import TempKommun from "./Admin/Pages/TempKommun";
import Login from "./Admin/Pages/Login";

function App() {
  return (
    <div>
      <Route path="/" exact component={Index} />
      <Route path="/login" exact component={Login} />
      <Route path="/vad-vi-gor" exact component={Services} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/admin/data" exact component={GetData} />
      <Route path="/admin/aktuell-data" exact component={CurrentData} />
      <Route path="/admin/order-data" exact component={OrderData} />
      <Route path="/admin/skicka" exact component={SendEmail} />
      <Route path="/admin/kommun/:id" exact={false} component={TempKommun} />
    </div>
  );
}

export default App;
