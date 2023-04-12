import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <NavBar />
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
