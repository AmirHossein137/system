import { Toaster } from "react-hot-toast";
import "./App.css";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Layout>
        <Toaster />
        <Login />
      </Layout>
    </>
  );
}

export default App;
