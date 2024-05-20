import Counter from './components/counter';
import Navbar from './components/navbar';
import { connect } from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter />
    </div>
  );
}

export default App;
