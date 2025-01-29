import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App";
import Footer from "./Footer";
import questionList from "../questionList";
import { lazy, Suspense } from "react";
import Header from "./Header";
Header;
export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.entries(questionList).map(([id, title]) => {
          const Component = lazy(() =>
            import(`./pages/Question_${id}/App.jsx`).catch(
              () => import("./pages/NotFound") // Fallback if the file doesn't exist
            )
          );

          return (
            <Route
              key={id}
              path={`/question-${id}-${title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
      <Footer />
    </Router>
  );
}
