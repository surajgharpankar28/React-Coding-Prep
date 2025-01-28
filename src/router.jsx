import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App";
import Question1 from "./pages/Question_1/App";
import Question2 from "./pages/Question_2/App";
import Question3 from "./pages/Question_3/src/App";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question-1" element={<Question1 />} />
        <Route path="/question-2" element={<Question2 />} />
        <Route path="/question-3" element={<Question3 />} />
      </Routes>
    </Router>
  );
}
