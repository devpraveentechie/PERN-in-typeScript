import "./App.css";
import HeaderNavigation from "./Components/HeaderNavigation";
import { PageRouter } from "./Routes";

function App() {
  return (
    <div className="App">
      <HeaderNavigation />
      <PageRouter />
    </div>
  );
}

export default App;
