import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Signin from "./routes/sign-in/sign-in";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index is the induction of base component */}
        <Route index element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
