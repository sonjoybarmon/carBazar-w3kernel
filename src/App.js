import Router from "./Router";
import "./App.css";
import "./App.scss";
import ContextDriver from "./Contexts/ContextDriver";
import ContextLogin from "./Contexts/ContextAuth/ContextLogin";
import ContextCar from "./Contexts/ContextCar";
function App() {
  return (
    <ContextLogin>
      <ContextCar>
        <ContextDriver>
          <Router />
        </ContextDriver>
      </ContextCar>
    </ContextLogin>
  );
}

export default App;
