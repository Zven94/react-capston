import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { incrementCount, stocksData } from '../../redux/stocks/stockSlice';

export default function DisplayStocks() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.stocks);
  const [searchStock, setSearchStock] = useState('');

  useEffect(() => {
    if (!stocks.length) {
      dispatch(stocksData());
    }
  }, [dispatch, stocks.length]);

  const filteredStocks = stocks.filter((stock) => stock.name
    .toLowerCase().includes(searchStock.toLowerCase()));

  const handleIncrementViews = (symbol) => {
    setTimeout(() => {
      dispatch(incrementCount({ symbol }));
    });
  };

  return (
    <>
      <Col className="d-flex justify-content-center">
        <Row className="d-flex justify-content-between">
          <div className="d-flex justify-content-center w-100 mb-3">
            <input
              type="text"
              placeholder="search stock"
              value={searchStock}
              onChange={(e) => setSearchStock(e.target.value)}
            />
          </div>

          <Container className="d-flex justify-content-center">
            <ul className="list-group w-100">
              {console.log(stocks)}
              {filteredStocks.map((stock) => (
                <li key={stock.symbol} className="list-group-item d-flex justify-content-center">
                  <Link to={`/detail/${stock.symbol}/${stock.name}/${stock.price}/${stock.change}/${stock.dayLow}/${stock.dayHigh}/${stock.marketCap}/${stock.volume}/${stock.exchange}`}>
                    <button type="submit" onClick={() => handleIncrementViews(stock.symbol)} className="w-75">
                      {stock.symbol}
                      {' '}
                      -
                      {' '}
                      {stock.price}
                      {' Views: '}
                      {stock.views}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Row>
      </Col>
    </>
  );
}
