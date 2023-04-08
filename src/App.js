import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import ErrorPage from "./pages/404";
function App() {
  return (
    <div className="max-w-[1512px] mx-auto bg-[#FFFFFFA3] min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
