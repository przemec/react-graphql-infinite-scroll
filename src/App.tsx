import "./index.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Launches from "./modules/Launches";
import LaunchDetails from "./components/LaunchDetails";
import HomePage from "./components/HomePage";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="launches">
        <Route index element={<Launches />} />
        <Route path=":launchId" element={<LaunchDetails />} />
      </Route>
    </Route>
  </Routes>
);

export default App;
