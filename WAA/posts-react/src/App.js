import logo from './logo.svg';
import './App.css';
import Blog from './continers/blog/Blog';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
  );
}

export default App;
