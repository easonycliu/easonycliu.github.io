import { BrowserRouter as Router } from 'react-router-dom';
import BasicRouter from './router/Router';

function App() {
  return (
    <Router basename='/'>
      <BasicRouter/>
    </Router>
  );
};

export default App;
