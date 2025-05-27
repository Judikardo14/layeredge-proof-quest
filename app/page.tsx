import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">LayerEdge Proof Quest</h1>
      <p className="description">
        Dive into the future of blockchain with LayerEdge. Test your skills in validating decentralized proofs with speed and precision.
      </p>
      <div className="button-container">
        <Link href="/game" className="button button-primary">
          Start Quest
        </Link>
        <Link href="/how-to-play" className="button button-secondary">
          How to Play
        </Link>
      </div>
      <footer className="footer">
        <p>
          Be part of the{' '}
          <a href="https://layeredge.io" target="_blank" rel="noopener noreferrer" className="link">
            LayerEdge Token Generation Event
          </a>{' '}
          and shape the future of decentralized verification.
        </p>
      </footer>
    </main>
  );
}