import Game from '../../Components/Game';

export default function GamePage() {
  return (
    <main className="container">
      <h1 className="title">LayerEdge Proof Quest</h1>
      <Game />
      <footer className="footer">
        <p>
          Join the{' '}
          <a href="https://layeredge.io" target="_blank" rel="noopener noreferrer" className="link">
            LayerEdge Token Generation Event
          </a>{' '}
          to explore the future of blockchain verification.
        </p>
      </footer>
    </main>
  );
}