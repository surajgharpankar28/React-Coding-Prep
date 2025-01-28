import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App";
import Question1 from "./pages/Question_1/App";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question-1" element={<Question1 />} />
      </Routes>
    </Router>
  );
}
