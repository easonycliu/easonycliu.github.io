import { HashRouter as Router } from 'react-router-dom';
import BasicRouter from './router/Router';

function App() {
  return (
    <Router basename='/yichengliu.github.io'>
      <BasicRouter/>
    </Router>
  );
};

export default App;
