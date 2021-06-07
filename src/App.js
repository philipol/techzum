import Index from "./Pages/Index";
import Services from "./Pages/Services";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Route path="/" exact component={Index} />
      <Route path="/vad-vi-gor" exact component={Services} />
    </div>
  );
}

export default App;
