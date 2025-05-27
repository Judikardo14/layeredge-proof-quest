import Link from 'next/link';

export default function HowToPlay() {
  return (
    <main className="container">
      <h1 className="title">How to Play LayerEdge Proof Quest</h1>
      <div className="content">
        <h2 className="subtitle">Objective</h2>
        <p className="description">
          Step into the role of a blockchain verifier. Validate or reject proofs within a time limit, showcasing LayerEdge’s cutting-edge technology.
        </p>
        <h2 className="subtitle">Rules</h2>
        <ul className="list">
          <li className="list-item">Proofs appear as cards with a hash and a validity indicator (green for valid, red for invalid).</li>
          <li className="list-item">You have 5 seconds to click "Validate" or "Reject" for each proof.</li>
          <li className="list-item">Correct decisions earn 10 points, with bonuses for consecutive correct answers (combos).</li>
          <li className="list-item">Incorrect decisions deduct 5 points and reset the combo.</li>
          <li className="list-item">The game ends after processing all proofs, displaying your final score.</li>
        </ul>
        <p className="description">
          Ready to experience LayerEdge’s verification power? Start your quest now!
        </p>
        <Link href="/game" className="button button-primary">
          Start Playing
        </Link>
      </div>
      <footer className="footer">
        <p>
          Learn more about the{' '}
          <a href="https://layeredge.io" target="_blank" rel="noopener noreferrer" className="link">
            LayerEdge TGE
          </a>.
        </p>
      </footer>
    </main>
  );
}