import Router from "./Router";
import "./App.css";
import "./App.scss";
import ContextRecommended from "./Contexts/ContextRecommended";
import ContextLogin from "./Contexts/ContextAuth/ContextLogin";
function App() {
  return (
    <ContextLogin>
      <ContextRecommended>
        <Router />
      </ContextRecommended>
    </ContextLogin>
  );
}

export default App;
