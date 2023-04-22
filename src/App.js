import './App.css';
import ClassComp from './components/ClassComp';
import ClassProps from './components/ClassProps';
import FunctionalComp from './components/FunctionalComp';
import ParentComp from './components/ParentComp';
import FunctionProp from './components/FunctionProp';

function App() {
  return (
    <div className="App">
      <h2>I App component, the root component in react.</h2>
      <ClassComp />
      <FunctionalComp />
      <ParentComp />
      {/* child props used when components do not know about their children ahead of time e.g coming frm request */}
      <ClassProps name='Shadoom'><p>Child component</p></ClassProps>
      <FunctionProp name='B2K' place='Nairobi' />
    </div>
  );
}

export default App;
