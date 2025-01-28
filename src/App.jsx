import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Welcome to the Questions App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/question-1">Question 1</Link>
          </li>
          <li>
            <Link to="/question-2">Question 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
