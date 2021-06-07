<<<<<<< HEAD
import logo from './Assets/Img/digizumLogo.png'
import './App.css';
=======
import "./App.css";
import Index from "./Pages/Index";
import Services from "./Pages/Services";
import { Route } from "react-router-dom";
>>>>>>> feature/import_code

function App() {
  return (
    <div>
      <Route path="/" exact component={Index} />
      <Route path="/vad-vi-gor" exact component={Services} />
    </div>
  );
}

export default App;
