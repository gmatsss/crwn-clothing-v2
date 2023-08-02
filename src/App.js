import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index is the induction of base component */}
        <Route index element={<Home />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/Shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
