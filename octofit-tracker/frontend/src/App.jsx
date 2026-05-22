import { Link, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <section className="container py-5 text-center">
      <img
        src="../../docs/octofitapp-small.png"
        alt="OctoFit logo"
        className="mb-4 logo"
      />
      <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
      <p className="lead">Track workouts, build teams, and climb the leaderboard.</p>
    </section>
  );
}

function NotFound() {
  return (
    <section className="container py-5 text-center">
      <h2>Page not found</h2>
      <Link to="/" className="btn btn-primary mt-3">
        Go Home
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand fw-semibold">
            OctoFit
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
