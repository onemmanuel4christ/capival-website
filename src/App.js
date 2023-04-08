import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="max-w-[1512px] mx-auto bg-[#FFFFFFA3] min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/exercise/:id" element={<ExerciseDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
