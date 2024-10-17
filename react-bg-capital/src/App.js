// src/App.js
import logo from './logo.svg';
import './App.css';
import Charts from './components/Charts/Charts.tsx';

function App() {
  const chartData = {
    categories: ['January', 'February', 'March', 'April', 'May'],
    series: [
      {
        name: 'Sales',
        data: [30, 40, 35, 50, 49],
      },
    ],
  };

  return (
    <div className="App">
      <header >
       
      </header>
      {/* Pasar datos al componente Charts */}
      <Charts data={chartData} />
    </div>
  );
}

export default App;
