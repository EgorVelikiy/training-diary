import Form from './components/Form/Form'
import mainList from './components/Data/data'
import './App.css';

function App() {
  return (
    <div className="App">
      <Form mainList={mainList}/>
    </div>
  );
}

export default App;
