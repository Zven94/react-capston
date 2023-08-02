import Navbar from '../components/NavElement/NavElement';
import DisplayStocks from '../components/displayData/displayStocks';

export default function Homepage() {
  return (
    <main>
      <Navbar />
      <div>Home page!</div>
      <DisplayStocks />
    </main>
  );
}
