import './App.css';
import ClassComp from './components/ClassComp';
import FunctionalComp from './components/FunctionalComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <h2>I App component, the root component in react.</h2>
      <ClassComp />
      <FunctionalComp />
      <ParentComp />
    </div>
  );
}

export default App;
