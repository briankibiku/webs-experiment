import './App.css';
import ClassComp from './components/ClassComp';
import FunctionalComp from './components/FunctionalComp';

function App() {
  return (
    <div className="App">
      <h2>I App component, the root component in react.</h2>
      <ClassComp />
      <FunctionalComp />
    </div>
  );
}

export default App;
