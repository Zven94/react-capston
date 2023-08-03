import { Link, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from '../components/NavElement/NavElement';

export default function Detailpage() {
  const {
    symbol, name, price, change, dayLow, dayHigh, marketCap, volume, exchange,
  } = useParams();
  return (
    <main>
      <Navbar />
      <Container className="d-flex justify-content-center">
        <h2>Stock Detail</h2>
        <p>
          Symbol:
          {' '}
          {symbol}
        </p>
        <p>
          Name:
          {' '}
          {name}
        </p>
        <p>
          Price:
          {' '}
          {price}
        </p>
        <p>
          Daily change:
          {' '}
          {change}
        </p>
        <p>
          Min value today:
          {' '}
          {dayLow}
        </p>
        <p>
          Max value today:
          {' '}
          {dayHigh}
        </p>
        <p>
          Market Cap:
          {' '}
          {marketCap}
        </p>
        <p>
          Vol:
          {' '}
          {volume}
        </p>
        <p>
          Exchange:
          {' '}
          {exchange}
        </p>
      </Container>
      <Link to="/">
        <button type="submit">Close</button>
      </Link>
    </main>
  );
}
