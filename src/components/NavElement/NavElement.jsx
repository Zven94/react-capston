import Container from 'react-bootstrap/Container';

export default function Navbar() {
  return (
    <>
      <header>
        <Container className="d-flex justify-content-center" bordered>
          <nav>
            <h1>Stock Prices</h1>
          </nav>
        </Container>
      </header>
    </>
  );
}
