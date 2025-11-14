export default function Header({ onActorsClick, onActressesClick }) {
  return (
    <header className="fixed-top bg-dark py-3">
      <nav className="container">
        <div className="d-flex justify-content-center gap-4">
          <button onClick={onActorsClick} className="btn btn-outline-light b">
            Attori
          </button>
          <button onClick={onActressesClick} className="btn btn-outline-light">
            Attrici
          </button>
        </div>
      </nav>
    </header>
  );
}
