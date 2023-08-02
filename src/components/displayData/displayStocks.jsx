import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stocksData } from '../../redux/stocks/stockSlice';

export default function DisplayStocks() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.stocks);

  useEffect(() => {
    if (!stocks.length) {
      dispatch(stocksData());
    }
  }, [dispatch, stocks.length]);

  return (
    <>
      <ul>
        {console.log(stocks)}
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.symbol} - 
            {stock.price}
          </li>
        ))}

      </ul>
    </>
  );
}
