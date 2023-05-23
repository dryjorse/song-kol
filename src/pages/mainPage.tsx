import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogNews">Blog&News</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="/transport">Transport</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ</Link>
          </li>
        </ul>
      </nav>

      <hr />
    </div>
  );
}
