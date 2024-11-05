import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/details" element={<Details />}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
