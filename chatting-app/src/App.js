import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { route } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {route.map((routeItem) => {
          return (
            <Route
              key={routeItem.pathName}
              path={routeItem.pathName}
              element={routeItem.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
