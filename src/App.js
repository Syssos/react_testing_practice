import './App.css';
import DaBabyBox from './components';

function App() {
  return (
    <div className="App" data-testid="app-project">
      <DaBabyBox status={false}/>
    </div>
  );
}

export default App;
